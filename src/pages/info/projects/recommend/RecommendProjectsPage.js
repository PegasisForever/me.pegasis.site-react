import React from "react"
import "./recommendProjectsPage.css"
import InfoBar from "../common/InfoBar"
import ProjectTab from "../common/ProjectTab"

export default class RecommendProjectsPage extends React.Component {
    render() {
        return <div className={"page-root"}>
            <InfoBar/>
            <div className={"site-width"}>
                <ProjectTab page={"recommend"} isMobile={window.innerWidth <= 600}/>
            </div>
        </div>
    }
}
