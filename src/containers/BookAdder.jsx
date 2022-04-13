import { useRef } from 'react'
import { fetchBook } from '../infrastructures/BookAPIService.ts'

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
        const book = fetchBook(isbn);

        if (book) {
            addBook(book)
            isbnRef.current.value = null
        }
        else {

        }
    }

    function handleAddRandomBook() {
        const randomIsbn = isbns[Math.floor(Math.random() * isbns.length)];
        addBook(fetchBook(randomIsbn))
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
