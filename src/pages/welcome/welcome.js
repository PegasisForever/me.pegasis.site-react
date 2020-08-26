import React from 'react';
import {Link} from "react-router-dom"

export default class WelcomePage extends React.Component {
    render() {
        return <div>
            <h1>Welcome Page</h1>
            <Link to={"/info/about"}>Learn more</Link>
        </div>;
    }
}
