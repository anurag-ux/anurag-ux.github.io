import React from "react";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

import './stylesheets/Landing.css';

function Landing() {
    return (
        <div className="landing">
            <Navbar />
            <Introduction />
            <Projects />
            <Footer/>
        </div>
    );
}

export default Landing;