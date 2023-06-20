import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPostClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            apiResponse: null
        }
    }

    postToApi = () => {

        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: "Hello World",
                body: "Working",
                userId: 1,
            }
        )
            .then(res => {
                this.setState({
                    apiResponse: res.data

                })
            })
    }


    render() {
        const { apiResponse } = this.state
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>

                {apiResponse ? (
                    <div>
                        <h1>{apiResponse.title}</h1>
                        <p>{apiResponse.body}</p>
                        <p>User ID{apiResponse.userId}</p>
                        <hr />
                    </div>
                ) : (
                    <p>Click Button to Test</p>
                )
            }
            </div>
        )
    }
}

export default HTTPPostClass