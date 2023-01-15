import React, { useState, useEffect } from 'react';

import './stylesheets/Introduction.css'

function Introduction() {
    const [designation, setDesignation] = useState("Product Manager");
    const designations = ["Product Manager", "Frontend Developer", "Blockchain Developer"];
    let currentDesignation = 0;

    useEffect(() => {
        const interval = setInterval(() => {
          // update designation text here
          setDesignation(designations[currentDesignation]);
          currentDesignation = (currentDesignation + 1) % designations.length;
        }, 2000); // 30 minutes
        return () => clearInterval(interval);
      }, []);

    return (
        <div id='intro' className='main-introduction'>
            <img alt='main' className='main-picture'
                src='https://gistcdn.githack.com/anurag-ux/a5340bb04294e23431da2c806f25ccb4/raw/e46ad68648e00f57707d51c9ce5f0417cb15b6bb/main-picture.svg'>
            </img>
            <div className='introduction'>
                <p className='intro'>Hello! I Am <span className='keyword'>Anurag Shandilya</span></p>
            </div>
            <div className='experience'>
                <p className='roles'>
                    I'm a <span className='designation keyword'>{designation}</span>
                </p>
                <p className='current-role'>
                    Currently, I'm an Associate Product Manager at <img alt='logo' className='refactor-logo'
                        src='https://gistcdn.githack.com/anurag-ux/e9d303f54f60b4006a220597efccbf04/raw/ad850c6f00d39f28f600e7f7139f18635eea3249/logo.svg' />
                    Refactor Academy
                </p>
                <p className='experience-description'>
                    A self-taught Software Developer & a PM, functioning in the industry for 1+ years now.
                    I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
                </p>
            </div>
        </div>
    );
}

export default Introduction;