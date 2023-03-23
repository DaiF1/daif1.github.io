import { filterProps } from 'framer-motion';
import React from 'react'
import { useState, useEffect } from 'react'

function Hello(props) {
    // the size of the window in the begginning
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // we use the useEffect hook to listen to the window resize event
    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    return (
        <div className="card" style={
            {
                transformOrigin: `${windowSize.width / 2} 0`,
                transform: `scale(${1 + props.delta / 1000})`,
            }
        }>
            <div>
                <h1>Hi, I'm DaiF</h1>
                <h2 className='subtitle'>A french student in computer science</h2>
            </div>
        </div>
    )
}

export default Hello;