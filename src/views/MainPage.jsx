import { useState } from 'react'
import BookAdder from '../containers/BookAdder.jsx';
import BookViewer from '../containers/BookViewer.jsx';

export default function ListBooksForm() {
    const INEXISTENT_BOOK = "The book does not exist.";
    const UNABLE_TO_EDIT_BOOKS = "Editing books is currently not supported.";
    const DUPLICATE_BOOK = "The book is already listed. It cannot be added twice.";


    const [books, setBooks] = useState([])
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("invisible")

    function displayError(message) {
        setMessage(message)
        setMessageType("bg-danger text-white")
    }

    function resetDisplay() {
        setMessage("")
        setMessageType("invisible")
    }

    function onAddBook(book) {
        const isPresent = books.filter((b) => b.title === book?.title).length > 0
        if (isPresent) {
            displayError(DUPLICATE_BOOK)
        }
        else if (book === undefined) {
            displayError(INEXISTENT_BOOK)
        }
        else {
            setBooks([...books, { ...book }])
            resetDisplay()
        }
    }

    function onEditBook(title) {
        displayError(UNABLE_TO_EDIT_BOOKS)
    }

    function onRemoveBook(title) {
        setBooks(books.filter((b) => b.title !== title))
        resetDisplay()
    }

    return (
        <div className="container-fluid px-5">
            <h1 className="text-center py-5">BOOK MANAGER</h1>
            <p className={messageType + " p-3"}>{message}</p>
            <BookAdder addBook={onAddBook} />
            <BookViewer books={books} editBook={onEditBook} removeBook={onRemoveBook} />
        </div>
    )
}
