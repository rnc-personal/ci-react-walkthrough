import React, { Component } from 'react'

export default class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: 'Type your Comment Here'
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleCategorySelect = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleComments = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name</label>
                        <input value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Your Category</label>
                        <select name="category" id="id-category" value={this.state.category} onChange={this.handleCategorySelect}>
                            <option value="website">Website</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Enquiry</option>
                        </select>
                        <div>
                            <label htmlFor="id-comments">Comments:</label>
                            <textarea name="comments" id="id-comments" placeholder={this.state.comments} onChange={this.handleComments}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}
