import React from "react"
import "./ProjectsAZPage.css"
import "../../../common.css"
import InfoBar from "../common/InfoBar"
import ProjectTab from "../common/ProjectTab"
import SearchBar from "./SearchBar"
import LinearLayout from "../../../../components/linearLayout"
import ProjectCard from "./ProjectCard"
import {getProjectsList} from "../common/projectsData"

function ProjectList(props) {
    return <div className={"site-width project-list"}>
        {getProjectsList(props.text).map((project) => <ProjectCard key={project.projectName} project={project}/>)}
        <ProjectCard fill/>
        <ProjectCard fill/>
    </div>
}

export default class ProjectsAZPage extends React.Component {
    state = {
        searchText: "",
    }

    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(text) {
        this.setState({
            searchText: text,
        })
    }

    render() {
        const isMobile = window.innerWidth <= 600
        return <div className={"page-root"}>
            <InfoBar/>
            <LinearLayout
                className={"site-width"}
                horizontal={!isMobile}
                vertical={isMobile}
                align={"space-between"}
                item={"center"}>
                <ProjectTab page={"a-z"}/>
                <SearchBar text={this.state.searchText} onChange={this.onSearch} isMobile={isMobile}/>
            </LinearLayout>
            <ProjectList text={this.state.searchText}/>
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
