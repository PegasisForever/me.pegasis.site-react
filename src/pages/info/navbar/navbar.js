import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
import "../../common.css"

function DesktopNavBar(props) {
    const page = props.page
    return <header className={"header-shadow"}>
        <img className={"nav-logo"} src={"/logo_filled.svg"} alt="logo"/>
        <Link className={"nav-btn " + (page === "about" ? "nav-btn-active" : "")}
              to={"/info/about"}>
            About
        </Link>
        <Link className={"nav-btn " + (page === "projects" ? "nav-btn-active" : "")}
              to={"/info/projects/featured"}>
            Projects
        </Link>
        <Link className={"nav-btn " + (page === "resources" ? "nav-btn-active" : "")}
              to={"/info/resources"}>
            Resources & Links
        </Link>
        <a className={"nav-btn"} href="https://api.pegasis.site/docs">API</a>
    </header>
}

class MobileNavBar extends React.Component {
    state = {
        isOpen: false,
    }

    constructor(props) {
        super(props)
        this.toggleOpen = this.toggleOpen.bind(this)
        this.close = this.close.bind(this)
    }

    render() {
        const page = this.props.page
        let title = ""
        if (page === "about") {
            title = "About"
        } else if (page === "projects") {
            title = "Projects"
        } else if (page === "resources") {
            title = "Resources & Links"
        }
        return <Fragment>
            <header>
                <img className={"nav-logo"} src={"/logo_filled.svg"} alt="logo"/>
                <p className={"title"}>{title}</p>
                <button className={"expend-btn"} onClick={this.toggleOpen}/>
            </header>
            <div className={"mob-nav-drop-div header-shadow"} style={{top: this.state.isOpen ? "0" : "-220px"}}>
                <Link className={"mobile-nav-btn " + (page === "about" ? "mobile-nav-btn-active" : "")}
                      to={"/info/about"}
                      onClick={this.close}>
                    About
                </Link>
                <Link className={"mobile-nav-btn " + (page === "projects" ? "mobile-nav-btn-active" : "")}
                      to={"/info/projects/featured"}
                      onClick={this.close}>
                    Projects
                </Link>
                <Link className={"mobile-nav-btn " + (page === "resources" ? "mobile-nav-btn-active" : "")}
                      to={"/info/resources"}
                      onClick={this.close}>
                    Resources & Links
                </Link>
                <a className="mobile-nav-btn" href="https://api.pegasis.site/docs">
                    API
                </a>
            </div>
            <div
                className={"mobile-nav-overlay"}
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${this.state.isOpen ? "0.5" : "0"})`,
                    pointerEvents: this.state.isOpen ? "auto" : "none",
                }}
                onPointerDown={this.close}
            />
        </Fragment>
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    close() {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
            })
        }
    }
}

export default class InfoNavBar extends React.Component {
    render() {
        const page = this.props.page

        if (window.innerWidth > 500) {
            return <DesktopNavBar page={page}/>
        } else {
            return <MobileNavBar page={page}/>
        }
    }

    updateDimensions = () => {
        this.setState({})
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
}
