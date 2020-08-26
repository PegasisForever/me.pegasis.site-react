import React from "react"
import "../../common.css"
import "./resourcesPage.css"
import BackgroundCard from "./BackgroundCard"
import {getImgExtension} from "../../../tools"
import LinkCard from "./LinkCard"

export default class ResourcesPage extends React.Component {
    render() {
        const imgExtension = getImgExtension()
        const isMobile = window.innerWidth <= 600

        return <div className={"page-root"}>
            <div className={"site-width"}>
                <BackgroundCard
                    isMobile={isMobile}
                    name={"PegaCloud"}
                    desc={"Private cloud storage service by Pegasis"}
                    buttonColor={"#009688"}
                    buttonText={"Enter"}
                    background={`/screenshots/pegacloud-desktop${imgExtension}`}
                    mobileBackground={`/screenshots/pegacloud-mobile${imgExtension}`}/>
                <BackgroundCard
                    isMobile={isMobile}
                    name={"PegaWorld"}
                    desc={"Minecraft survival server"}
                    buttonColor={"#543711"}
                    buttonText={"Website"}
                    background={`/screenshots/pegaworld-desktop${imgExtension}`}
                    mobileBackground={`/screenshots/pegaworld-mobile${imgExtension}`}/>

                <div className={"link-card-list"}>
                    <LinkCard
                        title={"My old personal website"}
                        link={"www.pegasis.site"}/>
                    <LinkCard
                        title={"EN-NP Volunteer Management System"}
                        link={"volunteer.ensonyan.com"}/>
                    <LinkCard
                        title={"Ensonyan's personal website"}
                        link={"www.ensonyan.com"}/>
                    <LinkCard
                        title={"Soulwinter's personal website"}
                        link={"soulwinter.github.io"}/>
                    <LinkCard
                        title={"Critsium's personal website"}
                        link={"critsium.github.io"}/>
                    <LinkCard fill/>
                    <LinkCard fill/>
                </div>
            </div>

        </div>
    }

    updateDimensions = () => {
        this.setState({})
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
        document.title = "Resources & Links | Pegasis"
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
}
