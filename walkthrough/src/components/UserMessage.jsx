import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (<h3>You are logged in!</h3>) : (<h3>Login?</h3>)}
        </div>
    )
}

export default UserMessage