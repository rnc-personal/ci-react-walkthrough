import React from 'react'

// The Looping for this component is done in its parent component. By passing a value fro mthe map function to be equal to the props //
// THis Componenet is rendered multiple times because it is inside of the map function.

function Book(props) {
    const book = props.book;
    return (
        <div>
            
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default Book