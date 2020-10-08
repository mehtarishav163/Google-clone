import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search';

function Home() {
    return (
        <div className="Home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/advertising">Advertising</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img
                    src="https://computerhistory.org/wp-content/uploads/2019/06/New-Google-Logo-great.jpg" alt="" />
            </div>
            <div className="home_inputContainer">
                <Search />
            </div>
        </div>
    )
}

export default Home;
