import React from 'react'
import Hello from './pages/Hello'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

const ABOUT_FLAG = 16000;
const PROJECTS_FLAG = 20000;
const END_OF_PAGE = 30000;

class App extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {component: <Hello delta={0}/>, offsetY: 0}

        this.wheelCapture = this.wheelCapture.bind(this)
    }

    wheelCapture(e) {
        this.setState((state, props) => {
            var delta = state.offsetY + e.deltaY
            if (delta < 0) delta = 0;
            else if (delta > END_OF_PAGE) delta = END_OF_PAGE;

            var comp = <Hello delta={delta}/>
            if (delta > PROJECTS_FLAG) comp = <Projects delta={delta}/>
            else if (delta > ABOUT_FLAG) comp = <AboutMe delta={delta}/>

            return {component: comp, offsetY: delta}
        })
    }

    render() {
        return (
            <div id='main-page' onWheelCapture={this.wheelCapture} style={
                {
                    backgroundColor: `${(this.state.offsetY > ABOUT_FLAG) ? "black" : "white"}`
                }
            }
            >
                {this.state.component}
            </div>
        );
    }
}

export default App;