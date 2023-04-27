import React, { useState, useEffect } from 'react';
import Footer from "./Footer"
import './stylesheets/Introduction.css'

function Introduction() {
    return (
        <div id='intro' className='main-introduction'>
            <img alt='main' className='main-picture'
                src='https://gistcdn.githack.com/anurag-ux/a5340bb04294e23431da2c806f25ccb4/raw/e46ad68648e00f57707d51c9ce5f0417cb15b6bb/main-picture.svg'>
            </img>
            <div className='introduction'>
                <p className='intro'>Hello! I am<span className='keyword' style={{'paddingLeft': '1%'}}>Anurag Shandilya</span>
                <Footer/>
                </p>
            </div>
            <div className='experience'>
                <p className='roles'>
                    I'm a Product Manager
                </p>
                <p className='current-role'>
                    Currently, I work as a Product Owner at <img alt='logo' className='refactor-logo'
                        src='https://gist.github.com/anurag-ux/eabbdac24254842fe4e8b1bca6410598/raw/3beaca2f5fad7398d07759865296a1e1da0668c4/logo.svg'/>
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