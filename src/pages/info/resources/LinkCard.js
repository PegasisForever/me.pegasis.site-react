import React from "react"
import "./linkCard.css"

export default function LinkCard(props) {
    if (props.fill) {
        return <div className={"link-card link-card-fill"}/>
    }
    return <div className={"link-card"}>
        <p>{props.title}</p>
        <a href={"https://" + props.link}>{props.link}</a>
    </div>
}
