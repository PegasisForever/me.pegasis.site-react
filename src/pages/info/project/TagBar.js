import React from "react"
import "./tagBar.css"

export default function TagBar(props) {
    if (props.isMobile) {
        return <div className={"tags-wrapper"}
                    style={{justifyContent: "center"}}>
            {props.tags.map((tag) =>
                <span key={tag}
                      className={"tag"}
                      style={{
                          marginLeft: "6.5px",
                          marginRight: "6.5px",
                      }}
                >{tag}</span>,
            )}
        </div>
    } else {
        return <div className={"tags-wrapper"}
                    style={{justifyContent: "flex-start"}}>
            {props.tags.map((tag) =>
                <span key={tag}
                      className={"tag"}
                      style={{
                          marginRight: "13px",
                      }}
                >{tag}</span>,
            )}
        </div>
    }

}
