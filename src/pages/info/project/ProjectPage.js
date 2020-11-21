import React, {Fragment} from "react"
import "./projectPage.css"
import "../../common.css"
import YoutubeEmbedded from "../../../components/YoutubeEmbedded"
import {getImgExtension, parseMarkDown} from "../../../tools"
import TagBar from "./TagBar"
import ButtonBar from "./ButtonBar"

function NavBar(props) {
    return <header className={"project-nav-bar header-shadow"}>
        <img className={"back-btn"}
             src={"/back_ic.svg"}
             alt={"back button"}
             onClick={() => window.history.back()}
        />
        <p className={"project-nav-title"}>{props.title}</p>
    </header>
}

class LongDescription extends React.Component {
    constructor(props) {
        super(props)

        let innerHTML = ""
        if (props.project.longDescLink !== "") {
            let baseMarkdown = ""
            if (props.project.longDesc !== "") {
                baseMarkdown = props.project.longDesc + "\n---\n"
            }

            innerHTML = parseMarkDown(baseMarkdown + "*Loading.....*")
            fetch(props.project.longDescLink)
                .then(response => response.text())
                .then(md => {
                    this.setState({
                        innerHTML: parseMarkDown(baseMarkdown + md),
                    })
                })
                .catch(error => {
                    this.setState({
                        innerHTML: parseMarkDown(baseMarkdown + "*Loading Failed*"),
                    })
                    console.error(error)
                })
        } else if (props.project.longDesc !== "") {
            innerHTML = parseMarkDown(props.project.longDesc)
        }

        this.state = {
            innerHTML: innerHTML,
        }
    }

    render() {
        return <div className={"longdesc"} dangerouslySetInnerHTML={{__html: this.state.innerHTML}}/>
    }
}


export default class ProjectPage extends React.Component {
    render() {
        const imgExtension = getImgExtension()
        const isMobile = window.innerWidth <= 500
        const project = this.props.project
        let color = project.color
        if (color === "") color = "455a64"

        return <Fragment>
            <NavBar title={this.props.project.projectName}/>
            <div className={"page-root"}>
                <div className={"site-width-text project-page"}>
                    <div className={"main-info-wrapper"}
                         style={{flexDirection: isMobile ? "column-reverse" : "row"}}>
                        <div className={"project-info-wrapper"}
                             style={{
                                 textAlign: isMobile ? "center" : "left",
                                 marginTop: isMobile ? "15px" : "0",
                                 paddingRight: isMobile ? "0" : "10px",
                             }}>
                            <p className={"name"}>{project.projectName}</p>
                            <p className={"shortdesc"}>{project.shortDesc}</p>
                            <TagBar isMobile={isMobile} tags={project.tags}/>
                        </div>
                        {project.icon !== "" ?
                            <img className="project-icon" src={"/" + project.icon} alt="project logo"/>
                            : null}
                    </div>
                    <ButtonBar isMobile={isMobile} buttons={project.buttons} color={color}/>
                    <div className={"screenshots"}>
                        {project.recordings.map((recording) =>
                            <YoutubeEmbedded key={recording} id={recording}/>)}
                        {project.screenshots.map((screenshot) => <a
                            href={"/screenshots/" + screenshot + imgExtension}
                            target={"_blank"}
                            rel={"noopener noreferrer"}>
                            <img className={"screenshot"}
                                 key={screenshot}
                                 src={"/screenshots/" + screenshot + imgExtension}
                                 alt={"screenshot"}/>
                        </a>)}
                    </div>
                    <LongDescription project={project}/>
                </div>
            </div>
        </Fragment>
    }

    updateDimensions = () => {
        this.setState({})
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
        document.title = this.props.project.projectName + " | Pegasis"
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
}
