import {projectMap} from "./pages/info/projectsData.js"
import fs from "fs"

const baseUrl = "https://me.pegasis.site"
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

fs.writeFileSync("public/sitemap.txt", siteMap.join("\n"))
