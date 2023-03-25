import react from 'react'

import './about.css'

const NEXT_PAGE_DELTA = 16000

function AboutMe(props) {
    return (
        <div className='card about-card' style={
            {
                transformOrigin: `100vw 50vw`,
                transform: `rotate3d(0, 1, 0, ${(props.delta / NEXT_PAGE_DELTA) * 90}deg) translateX(${(props.delta * props.delta) / (NEXT_PAGE_DELTA * 10)}px)`
            }}>
            <div className='dino-about'></div>
            <div className='about-desc'>
                <h1>About Me</h1>
                <p>This is supposed to be a very long text about me but I don't really know
                    what to add.
                </p>
                <p>
                    Maybe some skill scales? For thoses things at least:
                </p>
                <ul>
                    <li>HTML/CSS: Unfortunatly, I know how to do front</li>
                    <li>React: This website is written in React so that counts right?</li>
                    <li>C (OpenGL/Win32): Well... I love graphics engines</li>
                    <li>OCaml: It is incredible and I won't allow you to say otherwise</li>
                    <li>Python: Who can't use python nowaday?</li>
                    <li>C#: My Unity days</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe;