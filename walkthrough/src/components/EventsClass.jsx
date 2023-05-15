import React, { Component } from 'react'

export class EventsClass extends Component {

    clickHandler() {
        console.log('Class: clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class</button>
            </div>
        )
    }
}

export default EventsClass