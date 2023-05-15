import React from 'react'

function EventsFunctional() {

    function clickHandler(props) {
        console.log('Functional: clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Functional</button>
        </div>
    )
}

export default EventsFunctional