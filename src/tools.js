const MarkdownIt = require("markdown-it")
const md = new MarkdownIt()

export function parseMarkDown(text) {
    return md.render(text)
}

export function getImgExtension() {
    const ua = navigator.userAgent.toLowerCase()
    const isIos = /ipad|iphone|ipod/.test(ua) && !window.MSStream
    const isSafariMac = (ua.indexOf("safari") !== -1) && (ua.indexOf("macintosh") !== -1) && (ua.indexOf("chrome") === -1)

    let imgSuffix = ".webp"
    if (isIos || isSafariMac) {
        imgSuffix = ".jpg"
    }

    return imgSuffix
}

export function hasImageExtension(name){
    return name.endsWith(".png") || name.endsWith(".webp") || name.endsWith(".jpg")
}

export function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        let sel = window.getSelection();
        sel.removeAllRanges();
    }
}
