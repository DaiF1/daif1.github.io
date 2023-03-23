import React from 'react'
import Hello from './components/Hello'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

class App extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {component: <Hello/>, offsetY: 0}

        this.wheelCapture = this.wheelCapture.bind(this)
    }

    wheelCapture(e) {
        this.setState((state, props) => {
            var delta = state.offsetY + e.deltaY
            var comp = <Hello/>
            if (delta > 2000) comp = <Projects/>
            else if (delta > 1000) comp = <AboutMe/>
            console.log(delta)

            return {component: comp, offsetY: delta}
        })
    }

    render() {
        return (
            <div onWheelCapture={this.wheelCapture}>
                {this.state.component}
            </div>
        );
    }
}

export default App;