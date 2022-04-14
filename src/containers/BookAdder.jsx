import { useRef } from 'react'
import { fetchBook } from '../infrastructures/BookAPIService.ts'

export default function BookAdder({ addBook, logError }) {
    const randomIsbns = [
        '9780747542988',
        '9781501110368',
        '9781925483598',
        '0446677450',
        '9781973446804',
        '9781447212690',
        '9780753410059',
        '9780385544238',
    ];

    const isbnRef = useRef()

    function handleAddBook() {
        const isbn = isbnRef.current.value
        addBookWith(isbn)
    }

    function handleAddRandomBook() {
        const randomIsbn = randomIsbns[Math.floor(Math.random() * randomIsbns.length)];
        addBookWith(randomIsbn)
    }

    async function addBookWith(isbn) {
        const book = await fetchBook(isbn);
        addBook(book)
        isbnRef.current.value = null
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
