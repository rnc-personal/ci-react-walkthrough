import React from 'react'

export default function ConditionalFunctional(props) {
    return (
        <div>
            <h3>{props.connected ? 'Connected' : 'Not Connected'}</h3>
        </div>
    )
}
