import React, {Fragment} from "react"
import "./backgroundCard.css"
import {SizedBox} from "../../../components/SizedBox"

export default function BackgroundCard(props) {
    if (props.isMobile) {
        return <Fragment>
            <img className={"mobile-card-img"} src={props.mobileBackground} alt=""/>
            <div className={"mobile-info-wrapper"}>
                <p className={"name"}>{props.name}</p>
                <p className={"desc"}>{props.desc}</p>
                <a className={"colored-btn-bg-card"}
                   style={{backgroundColor: props.buttonColor}}
                   href={props.link}
                   target={"_blank"}
                   rel={"noopener noreferrer"}>
                    {props.buttonText}
                </a>
                <SizedBox height={30}/>
            </div>
        </Fragment>
    } else {
        return <div className={"card"}
                    style={{backgroundImage: `url("${props.background}")`}}>
            <div className={"info-wrapper"}>
                <p className={"name"}>{props.name}</p>
                <p className={"desc"}>{props.desc}</p>
                <SizedBox height={8}/>
                <a className={"colored-btn-bg-card"}
                   style={{backgroundColor: props.buttonColor}}
                   href={props.link}
                   target={"_blank"}
                   rel={"noopener noreferrer"}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    }

}
