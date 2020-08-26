import React from "react"
import "./ProjectsAZPage.css"
import "../../../common.css"
import InfoBar from "../common/InfoBar"
import ProjectTab from "../common/ProjectTab"
import SearchBar from "./SearchBar"
import LinearLayout from "../../../../components/linearLayout"

export default class ProjectsAZPage extends React.Component {

    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
    }


    onSearch(text) {
        console.log(text)
    }

    render() {
        return <div className={"page-root"}>
            <InfoBar/>
            <LinearLayout className={"site-width"} horizontal align={"space-between"}>
                <ProjectTab page={"a-z"} isMobile={window.innerWidth <= 600}/>
                <SearchBar onChange={this.onSearch}/>
            </LinearLayout>

        </div>
    }
}
