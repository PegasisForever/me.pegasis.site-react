import React, {Fragment} from "react"
import "./backgroundCard.css"

export default function BackgroundCard(props) {
    if (props.isMobile) {
        return <Fragment>
            <img className={"mobile-card-img"} src={props.mobileBackground} alt=""/>
            <div className={"mobile-info-wrapper"}>
                <p className={"name"}>{props.name}</p>
                <p className={"desc"}>{props.desc}</p>
                <button className={"colored-btn-bg-card"}
                        style={{backgroundColor: props.buttonColor}}>
                    {props.buttonText}
                </button>
            </div>
        </Fragment>
    } else {
        return <div className={"card"}
                    style={{backgroundImage: `url("${props.background}")`}}>
            <div className={"info-wrapper"}>
                <p className={"name"}>{props.name}</p>
                <p className={"desc"}>{props.desc}</p>
                <button className={"colored-btn-bg-card"}
                        style={{backgroundColor: props.buttonColor}}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    }

}
