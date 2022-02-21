import React, { Component } from 'react'

export class ClassClick extends Component {
    eventHandler() {
        console.log("Claas vent handler clicked")
    };
    render() {
        return (
            <div>
                <button onClick={this.eventHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick