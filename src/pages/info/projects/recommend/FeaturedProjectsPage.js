import React from "react"
import "./featuredProjectsPage.css"
import InfoBar from "../common/InfoBar"
import ProjectTab from "../common/ProjectTab"
import LinearLayout from "../../../../components/linearLayout"

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
