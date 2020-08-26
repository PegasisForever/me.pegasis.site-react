import React from "react"
import {Link} from "react-router-dom"
import {Animate} from "react-move"
import {easeQuadInOut} from "d3-ease"
import "../common.css"
import "./welcome.css"

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props)

        const w = window.innerWidth
        const h = window.innerHeight

        let logoW = w / 3
        if (logoW > 300) {
            logoW = 300
        }

        this.state = {
            logoW: logoW,
            logoL: w / 2 - logoW / 2,
            logoT: h / 2 - logoW,
            showEgasis: false,
            showButton: false,
        }
    }


    componentDidMount() {
        document.title = "This is Pegasis"

        const w = window.innerWidth
        const h = window.innerHeight

        const logoX = -this.state.logoW * 0.9
        setTimeout(() => {
            this.setState({
                logoW: this.state.logoW * 0.8,
                logoL: w / 2 - this.state.logoW * 0.8 / 2 + logoX,
                logoT: h / 2 - this.state.logoW * 0.8,
            })
        }, 3000)
        setTimeout(() => {
            this.egasisStyle = {
                width: this.state.logoW * 0.8 * 2.6 + "px",
                height: this.state.logoW * 0.8 + "px",
                left: (w / 2 + this.state.logoW / 2 + logoX - this.state.logoW * 0.05) + "px",
                top: (h / 2 - this.state.logoW * 0.1 - this.state.logoW / 2) + "px",
            }
            this.setState({
                showEgasis: true,
            })
        }, 3500)
        setTimeout(() => {
            this.buttonLeft = (w / 2 - 75) + "px"
            this.setState({
                showButton: true,
            })
        }, 4200)
    }

    render() {
        const h = window.innerHeight
        return <div className={"white-bg"}>
            <Animate
                start={() => ({
                    logoW: this.state.logoW,
                    logoL: this.state.logoL,
                    logoT: this.state.logoT,
                })}
                update={() => ({
                    logoW: [this.state.logoW],
                    logoL: [this.state.logoL],
                    logoT: [this.state.logoT],
                    timing: {duration: 500, ease: easeQuadInOut},
                })}
            >
                {(state) => {
                    const {logoW, logoL, logoT} = state
                    return <img className={"logo-svg"}
                                src={"/logo_animated.svg"}
                                style={{
                                    width: logoW + "px",
                                    height: logoW + "px",
                                    left: logoL + "px",
                                    top: logoT + "px",
                                }}/>
                }}
            </Animate>
            {this.state.showEgasis ?
                <img className={"egasis-svg"}
                     src={"/egasis_animated.svg"}
                     style={this.egasisStyle}/> : null}
            <Link
                className={"red-btn"}
                style={{
                    opacity: this.state.showButton ? 1 : 0,
                    bottom: this.state.showButton ? (h / 5 + "px") : (h / 5 - 100 + "px"),
                    left: this.buttonLeft,
                }}
                to={"/info/about"}>
                Find out More
            </Link>
        </div>
    }
}
