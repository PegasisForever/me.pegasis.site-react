import {projectMap} from "./pages/info/projectsData.js"
import fs from "fs"
import file from "file"

const baseUrl = "https://pegas.is"
let siteMap = []
let allUrls = []

function addToBoth(path) {
    path = path.replace("//", "/").replace("/./", "/")
    siteMap.push(baseUrl + path)
    allUrls.push(baseUrl + path)
}

function addToAllUrls(path) {
    path = path.replace("//", "/").replace("/./", "/")
    allUrls.push(baseUrl + path)
}

addToBoth("/info/about")
addToBoth("/info/projects/featured")
addToBoth("/info/projects/a-z")
addToBoth("/info/resources")

projectMap.forEach((_, name) => {
    addToBoth("/info/project/" + encodeURIComponent(name))
})

process.chdir("public")
file.walkSync("./", (path, _, names) => {
    for (let name of names) {
        if (name !== "404.html") {
            if (name.endsWith(".html")) {
                if (name === "index.html") {
                    addToBoth("/" + path + "/")
                } else {
                    addToBoth("/" + path + "/" + encodeURIComponent(name))
                }
            } else {
                addToAllUrls("/" + path + "/" + encodeURIComponent(name))
            }
        }
    }
})
process.chdir("..")

fs.writeFileSync("public/sitemap.txt", siteMap.join("\n"))
fs.writeFileSync("public/urls.txt", allUrls.join("\n"))
