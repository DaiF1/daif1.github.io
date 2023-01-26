import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import AboutMe from '../components/AboutMe';
import Dino from '../components/Dino'

import './Home.css'

library.add(faArrowRight);

function Home() {
    return (
        <>
            <div className="welcome home-card">
                <div>
                    <h1>Hi, I'm DaiF</h1>
                    <h2 className='subtitle'>A French Student in Computer Science</h2>
                </div>
                <div>
                    <Dino className='dino dino-welcome img-reverse' animation={null} />
                </div>
            </div>
            <AboutMe />
            <div className='myprojects home-card'>
                <div>
                    <h2 className='section-title'>My Personal Projects</h2>
                    <p>All of my personal projects are available on my <a href='https://github.com/DaiF1'>GitHub</a> page</p>
                </div>
                <div className='prj-desc'>
                    <a className="prj-button" href='/projects'>
                        <span>Click Here to see them! </span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                    <Dino className="dino prj-dino" />
                </div>
            </div>
        </>
    )
}

export default Home;