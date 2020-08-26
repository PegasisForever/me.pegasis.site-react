import React from "react"
import "./searchBar.css"

export default function SearchBar(props) {
    return <div className={"search-bar " + (props.isMobile ? "search-bar-mobile" : "")}>
        <img src="/search_ic.svg" alt="search icon"/>
        <label htmlFor="search-input">Search</label>
        <input
            type="text"
            required
            value={props.text}
            onChange={(event) => props.onChange(event.target.value)}
        />
    </div>
}
