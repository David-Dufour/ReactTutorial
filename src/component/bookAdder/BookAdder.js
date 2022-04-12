import { useRef } from 'react'
import Book from '../../model/Book'

export default function BookAdder({ addBook }) {
    const isbnRef = useRef()

    function handleAddBook() {
        const isbn = isbnRef.current.value
        const book = new Book(isbn, 2021, "David Dufour", "A very interesting book that everyone loves so much that it requires multiples lines of text to describe.")
        addBook(book)
        isbnRef.current.value = null
    }

    return (
        <div>
            <div>Add a book by Open Library ID Number</div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="OLID" ref={isbnRef} />
                <button className="btn btn-primary btn-sm" type="button" onClick={handleAddBook}>Add</button>
            </div>
        </div>
    )
}
