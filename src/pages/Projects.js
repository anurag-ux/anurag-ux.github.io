import React from "react";

import Project from "../components/Project";
import './stylesheets/Projects.css'

function Projects() {
    const projects = [
        {
            "title": "Lendify",
            "description": "Lendify is a decentralized, blockchain based platform that enables users to securely and transparently borrow and lend money to each other.",
            "buttons": [
                {
                    "redirectUrl": "https://shorturl.at/fltuW",
                    "iconImg": "https://gistcdn.githack.com/anurag-ux/dfa06de184d570a48cb56bed9f2f2c4f/raw/23d91c5659940eeb5ae493c9f9501172e8625489/doc.svg",
                    "buttonText": "PRD"
                },
                {
                    "redirectUrl": "#",
                    "iconImg": "https://gistcdn.githack.com/anurag-ux/99a1957fd4c07c242b0eafbdd2d57edf/raw/a6ccaa51215ffecf74b60c4ec036082ed96c8c8e/figma.svg",
                    "buttonText": "Design"
                },
                {
                    "redirectUrl": "https://github.com/anurag-ux/Lendify",
                    "iconImg": "https://gistcdn.githack.com/anurag-ux/16d82906ed31f6f9c61046061dbad269/raw/4ae500b94dca72b1002ba56684ee38fd9feec476/git.svg",
                    "buttonText": "Source Code"
                },
                {
                    "redirectUrl": "https://beautiful-fudge-fe1262.netlify.app/",
                    "iconImg": "https://gistcdn.githack.com/anurag-ux/43b7660b31374db86e4fd70922baad13/raw/048f0e94a1072609ca97a089699b9ca787f8ed33/web.svg",
                    "buttonText": "App"
                }
            ],
            "caraousel-images": [
                'https://i.ibb.co/wh9sRjY/Screenshot-2023-01-15-at-11-55-16-AM.png',
                'https://i.ibb.co/LhTJYhs/Screenshot-2023-01-15-at-10-16-24-AM.png',
                'https://i.ibb.co/HDTtMW0/Screenshot-2023-01-15-at-10-17-39-AM.png'
            ]
        },
        {
    "title": "Indian General Elections",
    "description":"Generated the Exploratory Data Analysis Report. EDA involved cleaning the data set and predicting the winning percentage of a candidate based on some features, using Logistic Regression.",
    "buttons":[
        {
            "redirectUrl":"https://nbviewer.org/github/anurag-ux/2019-general-election/blob/master/Analysis.ipynb",
            "iconImg":"https://gistcdn.githack.com/anurag-ux/dfa06de184d570a48cb56bed9f2f2c4f/raw/23d91c5659940eeb5ae493c9f9501172e8625489/doc.svg",
            "buttonText": "Analysis"
        },
        {
            "redirectUrl":"https://github.com/anurag-ux/2019-general-election",
            "iconImg":"https://gistcdn.githack.com/anurag-ux/16d82906ed31f6f9c61046061dbad269/raw/4ae500b94dca72b1002ba56684ee38fd9feec476/git.svg",
            "buttonText": "Source Code"
        }
    ],
    "caraousel-images": [
        'https://i.ibb.co/dbcWVK7/Screenshot-2023-01-15-at-3-44-56-PM.png',
        'https://i.ibb.co/Xjwx9y5/Screenshot-2023-01-15-at-3-45-55-PM.png',
        'https://i.ibb.co/g4bkL2D/Screenshot-2023-01-15-at-3-46-37-PM.png'
    ]
}
    ];
    return (
        <div>
        <Project projects={projects} />
        </div>
    );
}

export default Projects;