import React from 'react';
import {Link} from "react-router-dom"

export default class InfoNavBar extends React.Component {
    render() {
        return <div>
            <Link to={"/info/about"}>About</Link>
            <Link to={"/info/projects"}>Projects</Link>
            <Link to={"/info/resources"}>Resources</Link>
        </div>;
    }
}
