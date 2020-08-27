import React from "react"

export default function YoutubeEmbedded(props) {
    return <iframe
        width={"225px"}
        height={"400px"}
        title={props.id}
        src={"https://www.youtube.com/embed/" + props.id}
        frameBorder={"0"}
        allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
        allowFullScreen/>
}
