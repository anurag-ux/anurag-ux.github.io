import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects"
import MoveToTopButton from "../components/Movetotop"

import './stylesheets/Landing.css';

function Landing() {
    return (
        <div className="landing">
            <Navbar />
            <Introduction />
            <MoveToTopButton/>
            <Projects />
        </div>
    );
}

export default Landing;