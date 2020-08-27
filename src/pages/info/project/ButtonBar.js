import React from "react"
import "./buttonBar.css"

export default function ButtonBar(props) {
    return <div className={"button-bar"}
                style={{justifyContent: props.isMobile ? "center" : "flex-start"}}>
        {props.buttons.map((buttonData) => <a
            href={buttonData[1]}
            target={"_blank"}
            rel={"noopener noreferrer"}
            key={buttonData[0]}
            className={"colored-btn"}
            style={{backgroundColor: "#" + props.color}}>
            {buttonData[0]}
        </a>)}
    </div>
}
