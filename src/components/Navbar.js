import React from "react";

import './stylesheets/Navbar.css'

function Navbar() {
    const handleClickProjects = (event) => {
        event.preventDefault();
        const projects = document.getElementById("projects");
        projects.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      const handleClickHome = (event) => {
        event.preventDefault();
        const projects = document.getElementById("intro");
        projects.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    return (
        <div className="navigation">
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link" onClick={handleClickHome}>Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link" onClick={handleClickProjects}>Projects</a>
                    </li>
                </ul>
                <a rel="noreferrer" className="download-resume" href="https://shorturl.at/benOU" target="_blank">
                    Download Resume</a>
            </nav>
        </div>
    );
}
export default Navbar