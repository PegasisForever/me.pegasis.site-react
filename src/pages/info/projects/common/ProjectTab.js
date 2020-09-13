import React from "react"
import {Link} from "react-router-dom"
import "./projectTab.css"
import "../../../common.css"

export default function ProjectTab(props) {
    return <div className={"project-tab-container"}>
        <Link className={props.page === "recommend" ? "active" : ""}
              to={"/info/projects/recommend"}>
            FEATURED
        </Link>
        <Link className={props.page === "a-z" ? "active" : ""}
              to={"/info/projects/a-z"}>
            A - Z
        </Link>
    </div>
}
