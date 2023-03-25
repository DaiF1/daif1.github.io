import { filterProps } from 'framer-motion';
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import './hello.css'

function Hello(props) {
    const houseRef = useRef(null);

    const [x, setX] = useState();
    const [y, setY] = useState();

    const getPosition = () => {
        const x = houseRef.current.offsetLeft;
        setX(x);

        const y = houseRef.current.offsetTop;
        setY(y);
    };

    useEffect(() => {
        getPosition();
    });

    useEffect(() => {
        window.addEventListener("resize", getPosition);
    }, [])

    return (
        <div className="card hello-card" style={
            {
                transformOrigin: `${x + 92}px ${y + 80}px`,
                transform: `scale(${1 + props.delta / 1000})`,
            }
        }>
            <div className='hello-text'>
                <h1 className='hello-title'>Hi, I'm DaiF</h1>
                <h2 className='subtitle'>A french student in computer science</h2>
            </div>
            <div className='house-container' ref={houseRef}>
                <div className='house'></div>
                <div className='house-side left-side'></div>
                <div className='house-top'></div>
                <div className='dino' style={
                    {
                        left: `${-props.delta / 50 + 120}pt`,
                        display: `${((-props.delta / 50) < -120) ? "none" : "block"}`
                    }
                }></div>
                <div className='house-side right-side'></div>
            </div>
        </div>
    )
}

export default Hello;