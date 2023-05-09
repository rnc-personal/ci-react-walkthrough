import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Click Me',
            count: 0
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {

            return {
                introduction: prevState.introduction === 'Hello' ? 'Goodbye' : 'Hello',
                buttonText: prevState.buttonText === 'Click Me' ? 'Ohh Clicky' : 'Click Me Again!',

            }
        },
            // Callback function waiting for the state to update
            () => console.log(this.state.introduction))
    }

    increment() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <hr />
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
                <h1>The Count Is: {this.state.count}</h1>
            </div>
        )
    }
}


export default StatefulGreeting;