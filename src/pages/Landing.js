import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";

import './stylesheets/Landing.css';

function Landing() {
    return (
        <div>
            <Navbar />
            <Introduction />
        </div>
    );
}

export default Landing;