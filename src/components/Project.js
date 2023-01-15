import React from 'react';

import ImageCarousel from './ImageCaraousel';

const Project = ({ projects }) => {
    const handleButtonClick = (event, url) => {
        event.preventDefault();
        window.open(url, "_blank");
    };
    return (
        <div>
            {projects.map(item => (
                <div id="projects" className="container">
                    <div className="left-section">
                        <h1 className='title'>{item["title"]}</h1>
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
                    <ImageCarousel images={item["caraousel-images"]} />
                </div>
            ))
            }
        </div>
    );
}

export default Project;