import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HTTPGetFunctional() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [postMessage, setPostMessage] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res);
                const data = Array.isArray(res.data) ? res.data : [res.data]
                setPosts(data);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                setError(err.message);
            })
    }, [])

    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts/',
            {
                title: "Hello World",
                body: "Working",
                userId: 156,
            }
        )
            .then(res => {
                setPostMessage(
                    res.status === 201 ? `Success! Post Created: ${res.data.title}` : `Error: ${res.data.message}`);
            })
    }

    return (
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>

            <h2>The Message You Posted...</h2>
            <p style={{backgroundColor: "lightblue"}}>
                {postMessage}
            </p>

            <h3>HTTPReqFunctional</h3>
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
                    error ? (
                        <h4>{error}</h4>
                    ) : (
                        <h4>Loading...</h4>
                    )
                )
            }
        </div>
    )
}

export default HTTPGetFunctional