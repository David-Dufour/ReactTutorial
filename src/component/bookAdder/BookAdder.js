import { useRef } from 'react'
import Book from '../../model/Book'

export default function BookAdder({ addBook }) {
    const isbns = [
        '9780747542988',
        '9781501110368',
        '9781925483598',
        '0446677450',
        '9780735211308',
        '9780670813025',
        '9788000008981'
    ];

    const isbnRef = useRef()

    function handleAddBook() {
        const isbn = isbnRef.current.value
        const book = new Book(isbn, 2021, "David Dufour", "A very interesting book that everyone loves so much that it requires multiples lines of text to describe.")
        addBook(book)
        isbnRef.current.value = null
    }

    function handleAddRandomBook() {
        const isbn = isbns[Math.floor(Math.random() * isbns.length)];
        const book = new Book(isbn, 2021, "David Dufour", "A very interesting book that everyone loves so much that it requires multiples lines of text to describe.")
        addBook(book)
    }

    return (
        <div className='py-4'>
            <div>Add a book by Open Library ID Number</div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="OLID" ref={isbnRef} />
                <button className="btn btn-dark" type="button" onClick={handleAddBook}>Add</button>
                <button className="btn btn-danger" type="button" onClick={handleAddRandomBook}>Random</button>
            </div>
        </div>
    )
}
