import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
import "../../common.css"

function DesktopNavBar(props) {
    const page = props.page
    return <header className={"header_shadow"}>
        <img className={"nav_logo"} src={"/logo_filled.svg"} alt="logo"/>
        <Link className={"nav_btn " + (page === "about" ? "nav_btn_active" : "")}
              to={"/info/about"}>
            About
        </Link>
        <Link className={"nav_btn " + (page === "projects" ? "nav_btn_active" : "")}
              to={"/info/projects"}>
            Projects
        </Link>
        <Link className={"nav_btn " + (page === "resources" ? "nav_btn_active" : "")}
              to={"/info/resources"}>
            Resources & Links
        </Link>
        <a className={"nav_btn"} href="https://api.pegasis.site/docs">API</a>
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
                <img className={"nav_logo"} src={"/logo_filled.svg"} alt="logo"/>
                <p className={"title"}>{title}</p>
                <button className={"expend_btn"} onClick={this.toggleOpen}/>
            </header>
            <div className={"mob_nav_drop_div header_shadow"} style={{top: this.state.isOpen ? "0" : "-220px"}}>
                <Link className={"mobile_nav_btn " + (page === "about" ? "mobile_nav_btn_active" : "")}
                      to={"/info/about"}
                      onClick={this.close}>
                    About
                </Link>
                <Link className={"mobile_nav_btn " + (page === "projects" ? "mobile_nav_btn_active" : "")}
                      to={"/info/projects"}
                      onClick={this.close}>
                    Projects
                </Link>
                <Link className={"mobile_nav_btn " + (page === "resources" ? "mobile_nav_btn_active" : "")}
                      to={"/info/resources"}
                      onClick={this.close}>
                    Resources & Links
                </Link>
                <a className="mobile_nav_btn" href="https://api.pegasis.site/docs">
                    API
                </a>
            </div>
        </Fragment>
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    close() {
        this.setState({
            isOpen: false,
        })
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
