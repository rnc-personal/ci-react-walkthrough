import React, { Component } from 'react'
import importedNames from '../names'

export default class SearchBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         searchTerm: '',
         names: importedNames
      }
    }

    handleSearch = (e) => {
        const inputText = e.target.value.toLowerCase()
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({names: filteredNames})
    }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>{this.state.names.length} Names Found</p>
        <input type="text"
        placeholder='Search Names...'
        onChange={(e) => {this.handleSearch(e)}}/>

        {this.state.names.map(name => (
                <p key={name}>{name}</p>
            ))
        }
        <div style={{margin: '0 auto'}}>Names will render here...</div>
      </div>


    )
  }
}
