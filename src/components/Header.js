import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto"
    };

    return (
        <div>
            <h1>Header</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>
                        HOME
                    </div>
                </Link>
                <Link to="/about">
                    <div>
                        ABOUT
                    </div>
                </Link>
                <Link to="/projects">
                    <div>
                        PROJECTS
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header
