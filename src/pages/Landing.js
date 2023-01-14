import React from "react";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";

import './stylesheets/Landing.css';

function Landing() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Footer/>
        </div>
    );
}

export default Landing;