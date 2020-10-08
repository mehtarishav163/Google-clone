import React from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";

function Search() {
    return (
        <div className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input />
                <MicIcon />
            </div>
            <div className="search_buttons">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search;
