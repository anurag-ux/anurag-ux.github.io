import React from 'react';

import './stylesheets/Experience.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className='header-class'>Experience</h1>
            <hr className='header-break'/>
            <div className='experience-container'>
                <div className="experience-item">
                <h3 className="experience-company"><img alt='logo' className='pluralsight-logo'
                        src='https://gist.github.com/anurag-ux/eabbdac24254842fe4e8b1bca6410598/raw/3beaca2f5fad7398d07759865296a1e1da0668c4/logo.svg'/></h3>
                    <div className='employment-details'> 
                        <h2 className="experience-title">Product Owner</h2>
                        <h4 className="experience-duration">May 2023 - Present</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Prioritizing product development based on business goals, ensuring the successful delivery of customer-centric solutions.</li>
                    </ul>
                </div>

                <div className="experience-item">
                <h3 className="experience-company"><img alt='logo' className='refactor-logo'
                        src='https://gist.github.com/anurag-ux/e220e4578e8620aee022512f259d6bec/raw/e9d80785b19ec9660a29b2e8223c893361e01953/logo.svg'/></h3>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager</h2>
                        <h4 className="experience-duration">September 2022 - April 2023</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Closely managed a cross-functional team including engineering, design, and QA in an agile environment to build a full-scale assessment platform.</li>
                        <li>Worked with the business and marketing teams to develop go-to-market plans, SEO strategies aiming to significantly increase user adoption and revenue.</li>
                        <li>Created and maintained the product backlog, along with forming sprint plans, user stories, and acceptance criteria.</li>
                    </ul>
                </div>

                <div className="experience-item">
                <h3 className="experience-company"><img alt='logo' className='trakinvest-logo'
                        src='https://www.vhv.rs/dpng/d/446-4461921_trakinvest-chrome-logo-web-bg-vr1-png-download.png'/></h3>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager Intern</h2>
                        <h4 className="experience-duration">November 2021 - August 2022</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Worked on an agile engineering team to build the next-gen work social media platform by understanding the requirements and turning them into features.</li>
                        <li>Conducted user research and gathered feedback from potential users to inform product decisions and improvements.</li>
                    </ul>
                </div>

                <div className="experience-item">
                <h3 className="experience-company"><img alt='logo' className='jio-logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/2048px-Reliance_Jio_Logo.svg.png'/></h3>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager Intern</h2>
                        <h4 className="experience-duration">September 2021 - November 2021</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Achieved a 25% increase in product usage by implementing a targeted marketing campaign, resulting in a significant increase in customer satisfaction.</li>
                        <li>Managed the product roadmap and budget, ensuring that resources were allocated efficiently and effectively to support the company’s business objectives.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;