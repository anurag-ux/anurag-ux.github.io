import React from "react";

import './stylesheets/Navbar.css'

function Navbar() {
    return (
        <div className="navigation">
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/projects" className="navbar-link">Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/connect" className="navbar-link">Connect</a>
                    </li>
                </ul>
                <a className="download-resume" href="shorturl.at/benOU">
                    Download Resume</a>
            </nav>
            <hr className='header-divider' />
        </div>
    );
}
export default Navbar