import React, { Component } from 'react'

export default class ControlledForm extends Component {

    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${this.inputName.current.value},Category: ${this.inputCategory.current.value},Comments: ${this.inputComments.current.value}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name</label>
                        <input

                            id="id-name"
                            name="name"
                            type="text"
                            defaultValue="Your Name..."
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Your Category</label>
                        <select name="category" id="id-category" ref={this.inputCategory}>
                            <option value="website">Website</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Enquiry</option>
                        </select>
                        <div>
                            <label htmlFor="id-comments">Comments:</label>
                            <textarea name="comments" id="id-comments" ref={this.inputComments}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}
