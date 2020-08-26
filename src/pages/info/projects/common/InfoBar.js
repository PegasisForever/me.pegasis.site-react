import React from "react"
import "./infoBar.css"

export default function InfoBar(props){
    return <div className={"info-bar"}>
        <div className={"site-width-text"}>
            <h1>Welcome to Projects!</h1>
            <p>Keeping all projects in record is difficult especially when I didn't have a constant device. On this
                page, I listed some meaningful projects that I did with descriptions and screenshots. They cover a wide
                range of topics including server side application, game development, communication tools and utilities.
                I hope you can gain some inspirations here :)</p>
            <a href="https://github.com/PegasisForever">My projects on GitHub</a>
        </div>
    </div>
}
