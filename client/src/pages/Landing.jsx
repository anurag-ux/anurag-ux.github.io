import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "./Projects"
import MoveToTopButton from "../components/Movetotop"
import Experience from "../components/Experience";

import './stylesheets/Landing.css';

function Landing() {
    return (
        <div className="landing">
            <Navbar />
            <Introduction />
            <Experience />
        </div>
    );
}

export default Landing;