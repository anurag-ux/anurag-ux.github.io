import React from "react";

import './stylesheets/Navbar.css'

function Navbar() {
    const handleClickExperience = (event) => {
        event.preventDefault();
        const projects = document.getElementById("experience");
        projects.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const handleClickProjects = (event) => {
        event.preventDefault();
        const projects = document.getElementById("projects");
        projects.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <div className="navigation">
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link" onClick={handleClickExperience}>Experience</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link" onClick={handleClickProjects}>Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a rel="noreferrer" className="navbar-link" href="https://shorturl.at/benOU" target="_blank">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <hr className="header-divider" />
        </div>
    );
}
export default Navbar