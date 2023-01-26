import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion';

import Dino from '../components/Dino'

library.add(faArrowRight);

function AboutMe() {
    const variants = {
        visible: {
            left: [-400, -290, -180, -70, 40, 150, 260, 370, 480],
            rotate: [0, -10, 0, 10, 0, -10, 0, 10, 0, -10, 0],
            transition: {
                duration: 1.5,
                ease: "linear",
                times: [0, 0.125, 0.25, 0.325, 0.5, 0.625, 0.75, 0.825, 1],
                repeat: 0,
                repeatDelay: 0
            }
        },
        hidden: {
            left: -400,
            rotate: 0
        }
    }

    const dino_anim = {
        visible: {
            scaleX: -1,
            rotate: 20,
            right: 220,
            transition: {
                duration: 1,
                delay: 1.5,
                ease: "easeInOut"
            }
        },
        hidden: { scaleX: -1, right: 20, rotate: 0 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    
    return(
        <div className="aboutme home-card">
            <h2 className='section-title'>About Me</h2>
            <motion.div
                className='about-card'
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={control}
            >
                <div className='about-desc'>
                    <p>
                        Faudrait remplir un peu ici avec ce que je fais de mon temps libre, les études tout ça tout ça.
                        C'est une bio quoi donc faut mettre des trucs dedans
                    </p>
                    <p>
                        Et puis faire plusieurs paragraphes aussi c'est pas mal. Après bon faut les faire...
                    </p>
                    <a className="dir-button" href='/resume'>
                        <span>Check out my Resume Here </span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                </div>
                <Dino className='dino dino-aboutme' animation={dino_anim} />
            </motion.div>
        </div>
    );
}

export default AboutMe;