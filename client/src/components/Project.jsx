import React from 'react';

import ImageCarousel from './ImageCaraousel';
import './stylesheets/Project.css';

const Project = ({ projects }) => {
    const handleButtonClick = (event, url) => {
        event.preventDefault();
        window.open(url, "_blank");
    };
    return (
        <div className='project-container'>
            <h1 className='header-class'>Projects</h1>
            <hr className='header-break'/>
            {projects.map(item => (
                <div id="projects" className="container">
                    <div className="left-section">
                        <h2 className='title'>{item["title"]}</h2>
                        <p className="description">{item["description"]}</p>
                        <div className="button-container">
                            {item["buttons"].map((button, index) => (
                                <button
                                    key={index}
                                    className="project-button"
                                    onClick={(e) => handleButtonClick(e, button.redirectUrl)}>
                                    <img className="icon" src={button.iconImg} alt="icon" />
                                    {button.buttonText}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default Project;