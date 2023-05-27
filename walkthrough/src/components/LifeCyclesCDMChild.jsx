
import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

  constructor(props) {
    console.log('Lifecycles: Child Constructor Called')
    super(props)

    this.state = {
      data: 'Lifecycles: Child Loading...',
    }
  }

  getData() {
    console.log('Lifecycles: Child getData() called')
    setTimeout(() => {
      console.log('Lifecycles: Child Data fetched!')
      this.setState({
        data: 'Child Loaded!'
      })
    }, 3000)
  }

  componentDidMount() {
    console.log('Lifecycles: Child Component mounted')
    this.getData();
  }


  render() {
    console.log('Lifecycles: Child Render method called')
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChild