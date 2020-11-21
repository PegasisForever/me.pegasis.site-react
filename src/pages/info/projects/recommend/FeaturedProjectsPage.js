import React from "react"
import "./featuredProjectsPage.css"
import InfoBar from "../common/InfoBar"
import ProjectTab from "../common/ProjectTab"
import LinearLayout from "../../../../components/linearLayout"
import ProjectCard from "../az/ProjectCard"
import {getProject} from "../../projectsData"

function ProjectList() {
    const featuredProjects=[
        getProject("YRDSB Teach Assist Mobile"),
        getProject("YRDSB Teach Assist Website"),
        getProject("YRDSB Teach Assist Server"),
        getProject("Raspberry Pi Monitor App"),
        getProject("Distribution Calculator"),
        getProject("Function Killer"),
        getProject("GROK"),
        getProject("Chart Maker")
    ]
    return <div className={"site-width project-list"}>
        {featuredProjects.map((project) => <ProjectCard key={project.projectName} project={project}/>)}
        <ProjectCard fill/>
        <ProjectCard fill/>
    </div>
}

export default class FeaturedProjectsPage extends React.Component {
    render() {
        const isMobile = window.innerWidth <= 600
        return <div className={"page-root"}>
            <InfoBar/>
            <LinearLayout
                className={"site-width"}
                align={isMobile ? "center" : "start"}
            >
                <ProjectTab page={"recommend"} isMobile={window.innerWidth <= 600}/>
            </LinearLayout>
            <ProjectList/>
        </div>
    }

    updateDimensions = () => {
        this.setState({})
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
        document.title = "Projects | Pegasis"
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
}
