import React from "react"
import "./searchBar.css"

export default class SearchBar extends React.Component {
    state = {
        text: "",
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({
            text: event.target.value,
        })
        this.props.onChange(event.target.value)
    }

    render() {
        return <div className={"search-bar"}>
            <img src="/search_ic.svg" alt="search icon"/>
            <label htmlFor="search-input">Search</label>
            <input
                type="text"
                required
                value={this.state.text}
                onChange={this.handleChange}
            />
        </div>
    }
}
