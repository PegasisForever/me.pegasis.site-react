import {projectMap} from "./pages/info/projectsData.js"
import fs from "fs"
import file from "file"

const baseUrl = "https://pegas.is"
let siteMap = []

function addPath(path) {
    siteMap.push(baseUrl + path)
}

addPath("/")
addPath("/info/about")
addPath("/info/projects/featured")
addPath("/info/projects/a-z")
addPath("/info/resources")

projectMap.forEach((_, name) => {
    addPath("/info/project/" + encodeURIComponent(name))
})

process.chdir("public")
file.walkSync("old", (path, _, names) => {
    names.filter(name => name.endsWith(".html") && name !== "404.html")
        .map(name => {
            if (name === "index.html") {
                return "/" + path + "/"
            } else {
                return "/" + path + "/" + encodeURIComponent(name)
            }
        })
        .map(name => name.replace("//", "/"))
        .forEach(addPath)
})
process.chdir("..")

fs.writeFileSync("public/sitemap.txt", siteMap.join("\n"))
