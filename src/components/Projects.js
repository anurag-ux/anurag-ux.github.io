import React from "react";
import './stylesheets/Projects.css'

function Projects() {
    const handleButtonClick = (event, url) => {
        event.preventDefault();
        window.open(url, "_blank");
    };
    return (
        <div id="projects" className="container">
            <div className="left-section">
                <h1 className="title">Lendify</h1>
                <p className="description">
                    Lendify is a decentralized, blockchain based platform that enables users to securely and
                    transparently borrow and lend money to each other.
                </p>
                <div className="button-container">
                    <button className="project-button" onClick={(e) => handleButtonClick(e, "https://shorturl.at/fltuW")}>
                        <img className="icon" src="https://gistcdn.githack.com/anurag-ux/dfa06de184d570a48cb56bed9f2f2c4f/raw/23d91c5659940eeb5ae493c9f9501172e8625489/doc.svg" alt="icon" />
                        PRD
                    </button>
                    <button className="project-button" onClick={(e) => handleButtonClick(e, "https://example1.com")}>
                        <img className="icon" src="https://gistcdn.githack.com/anurag-ux/99a1957fd4c07c242b0eafbdd2d57edf/raw/a6ccaa51215ffecf74b60c4ec036082ed96c8c8e/figma.svg" alt="icon" />
                        Design
                    </button>
                    <button className="project-button" onClick={(e) => handleButtonClick(e, "https://github.com/anurag-ux/Lendify")}>
                        <img className="icon" src="https://gistcdn.githack.com/anurag-ux/16d82906ed31f6f9c61046061dbad269/raw/4ae500b94dca72b1002ba56684ee38fd9feec476/git.svg" alt="icon" />
                        Source Code
                    </button>
                    <button className="project-button" onClick={(e) => handleButtonClick(e, "https://beautiful-fudge-fe1262.netlify.app/")}>
                        <img className="icon" src="https://gistcdn.githack.com/anurag-ux/5b816ea3dd387787bfddc5350427e10a/raw/6dd817a260449218fb430e5670cbbe4c60a927d6/web.svg" alt="icon" />
                        App
                    </button>
                </div>
            </div>
            <div className="right-section">
                <img src="https://i.ibb.co/q1CTHXy/Screenshot-2023-01-14-at-9-25-49-PM.png" alt="image" />
            </div>
        </div>
    );
}

export default Projects;