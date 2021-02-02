import React from "react"
import "./about.css"
import "../../common.css"

export default class AboutPage extends React.Component {
    componentDidMount() {
        document.title = "About | Pegasis"
    }

    render() {
        const margin = window.innerHeight / 2 - 140

        return <div className={"page-root"}>
            <p className={"slogan-text"} style={{
                marginTop: margin - 50 + "px",
                marginBottom: margin + 50 + "px",
            }}>
                Let's build a<br/>
                <span className={"green"}>better </span>
                future.
            </p>

            <div className={"info-div"}>
                <h1>About Me</h1>
                <div className={"line"}/>
                <p>A grade 12 student<br/>
                    ON, Canada<br/>
                    Middlefield Collegiate Institute<br/>
                    Love everything about electronic<br/>
                    Love making imagines true
                </p>
            </div>

            <div className={"info-div"}>
                <h1>What I'm Doing</h1>
                <div className={"line"}/>
                <p>Preparing for University of Waterloo<br/>
                    Typora-cli<br/>
                    Teach Assist client<br/>
                    Contests?&nbsp;
                    <del>No, I don't like them</del>&nbsp;
                    Apr. 18 2020: now I like them.
                </p>
            </div>

            <div className={"info-div"}>
                <h1>Skill Sets</h1>
                <div className={"line"}/>
                <p>Software Architecture<br/>
                    Machine Learning<br/>
                    Mathematics & Computational Theories<br/>
                    Programming Languages
                </p>
                <p>And...</p>
                <p>Googling</p>
            </div>

            <div className={"info-div"}>
                <h1>Contact Me</h1>
                <div className={"line"}/>
                <p>
                    Email:<a href="mailto: admin@pegasis.site">admin@pegasis.site</a><br/>
                    QQ: <a href="http://wpa.qq.com/msgrd?v=3&uin=2766141475&site=qq&menu=yes">2766141475</a><br/>
                    Instagram: <a href="https://www.instagram.com/__pegasis/">@__pegasis</a>
                </p>
            </div>
        </div>
    }
}
