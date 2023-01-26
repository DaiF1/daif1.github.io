import React from "react";

import { useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion';

function Dino(props) {
    {
        const control = useAnimation()
        const [ref, inView] = useInView()

        useEffect(() => {
            if (inView) {
                control.start("visible")
            } else {
                control.start("hidden");
            }
          }, [control, inView]);

        if (props.animation === null)
          return (<div className={props.className}></div>)

        return(
            <motion.div
                className={props.className}
                ref={ref}
                variants={props.animation}
                animate={control}
                initial="hidden"
            ></motion.div>
        )
    }
}

export default Dino;