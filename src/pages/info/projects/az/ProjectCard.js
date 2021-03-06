import React from "react"
import "./projectCard.css"
import {Link} from "react-router-dom"

export default function ProjectCard(props) {
    if (props.fill) {
        return <div className={"project-card project-card-fill"}/>
    }

    const project = props.project
    let color = project.color
    if (color === "") color = "455a64"

    return <div className={"project-card"} style={{borderBottomColor: "#" + color}}>
        <div className={"icon-name-wrapper"}>
            {project.icon !== "" ?
                <img className={"project-icon"} src={"/" + project.icon} alt={"Project Logo"}/> : null}
            <p className={"project-name"}>{project.projectName}</p>
        </div>
        <p className={"project-short-des"}>{project.shortDesc}</p>
        <div className={"tags-wrapper"}>
            {project.tags.map((tag) => (<span key={tag} className={"tag"}>{tag}</span>))}
        </div>
        {(project.longDesc !== "" || project.longDescLink !== "" || project.buttons.length > 0) ? <Link
            to={"/info/project/" + project.projectName}
            className={"colored-btn"}
            style={{backgroundColor: "#" + color}}>
            Learn More
        </Link> : null}
    </div>
}
