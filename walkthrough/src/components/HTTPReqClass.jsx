import React, { Component } from 'react'
import axios from 'axios'

export class HTTPReqClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: Array.isArray(res.data) ? res.data : [res.data]
                    // When requesting a single post, the data is an object, not an array
                    // So we check its type and put it into an array, if it is not an array
                })
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                this.setState({
                    error: err.message
                })
            })
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>HTTPReqClass</h2>
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h3>{post.id} : {post.title}</h3>
                                <p>Posted by: {post.userId}</p>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        this.state.error ? (
                            <h4>{this.state.error}</h4>
                        ) : (
                            <h4>Loading...</h4>
                        )
                    )
                }
            </div>
        )
    }
}

export default HTTPReqClass