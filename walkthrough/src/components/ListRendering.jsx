import React from 'react'
import Book from './Book'

function listRendering() {
    const bookList = [
        'book1', 'book 2', 'book 3'
    ]

    const books = [
        // Create 3 book objects, each with a property for title, author and pages
        {
            title: 'book1',
            author: 'author1',
            pages: 100
        },
        {
            title: 'book2',
            author: 'author2',
            pages: 200
        },
        {
            title: 'book3',
            author: 'author3',
            pages: 300
        }
    ]
        
    return (
        <div>
            <h3>List Of Books Using Map Directly In Component</h3>
            {bookList.map(book => {
                return <p key={book}>{book}</p>
            })}
            <h3>List Of Books Using Props</h3>
            {/* Loop through the Array of Objects, map each on to a book, then set the book PROP to the book VARAIBLE returned from the map */}
            {/* This passes the value down to the Book component, whose only job is to render the different values on each of the book objects */}
            {books.map(book => {
                return <Book key={book.title} book={book}/>
            })}
        </div>
    )
}

export default listRendering


