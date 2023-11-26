import React from 'react';

import './stylesheets/Experience.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className='header-class'>Experience</h1>
            <hr className='header-break' />
            <div className='experience-container'>
                <div className="experience-item">
                    <a href='http://pluralsight.com/' target="_blank" rel="noreferrer"><h3 className="experience-company"><img alt='logo' className='pluralsight-logo'
                        src='https://gist.github.com/anurag-ux/eabbdac24254842fe4e8b1bca6410598/raw/3beaca2f5fad7398d07759865296a1e1da0668c4/logo.svg' /></h3></a>
                    <div className='employment-details'>
                        <h2 className="experience-title">Product Owner</h2>
                        <h4 className="experience-duration">05/2023 - Present</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Led Agile development teams, ensuring sprint goals were met, and the product backlog was effectively
                            managed, reducing the development cycle time by 15%.</li>
                        <li>Partnering with product leaders to understand the product vision and strategy, and creating detailed
                            project plans.</li>
                        <li>Effectively delivered an improved assessment experience, resulting in a $200,000 boost to the platform’s
                            business.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <a href='https://www.refactor.academy/' target='_blank' rel="noreferrer"><h3 className="experience-company"><img alt='logo' className='refactor-logo'
                        src='https://gist.github.com/anurag-ux/e220e4578e8620aee022512f259d6bec/raw/e9d80785b19ec9660a29b2e8223c893361e01953/logo.svg' /></h3></a>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager</h2>
                        <span><h4 className="experience-duration">11/2022 - 04/2023</h4></span>
                    </div>
                    <ul className="experience-item-description">
                        <li> Successfully managed cross-functional team in agile environment to develop an assessment platform,
                            collaborated with business and marketing teams to drive user adoption and revenue growth through SEO
                            strategies, and oversaw product backlog, sprint planning, and user story development.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <a href="https://www.linkedin.com/company/trakinvest?originalSubdomain=sg" target="_blank" rel="noopener noreferrer"><h3 className="experience-company"><img alt='logo' className='trakinvest-logo'
                        src='https://www.vhv.rs/dpng/d/446-4461921_trakinvest-chrome-logo-web-bg-vr1-png-download.png' /></h3></a>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager Intern</h2>
                        <h4 className="experience-duration">11/2021 - 08/2022</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Collaborated on agile engineering team to develop next-gen work social media platform by translating
                            requirements into features, while conducting user research and gathering feedback for informed product
                            decisions and enhancements.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <a href="https://www.jio.com/platforms" target="_blank" rel="noopener noreferrer"><h3 className="experience-company"><img alt='logo' className='jio-logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/2048px-Reliance_Jio_Logo.svg.png' /></h3></a>
                    <div className='employment-details'>
                        <h2 className="experience-title">Associate Product Manager Intern</h2>
                        <h4 className="experience-duration">09/2021 - 11/2021</h4>
                    </div>
                    <ul className="experience-item-description">
                        <li>Drove 25% product usage growth through successful targeted marketing campaign, leading to improved
                            customer satisfaction, while effectively managing product roadmap, budget, and resource allocation in
                            alignment with company’s objectives.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;