import { useState } from 'react'
import BookAdder from '../containers/BookAdder.jsx';
import BookViewer from '../containers/BookViewer.jsx';

export default function ListBooksForm() {
    const [books, setBooks] = useState([])
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("bg-light")

    function onAddBook(book) {
        const isPresent = books.filter((b) => b.title === book.title).length > 0
        if (isPresent) {
            setMessage("The book \"" + book.title + "\" is already listed. It cannot be added twice.")
            setMessageType("bg-danger text-white")
        }
        else {
            setBooks([...books, book])
            setMessage("")
            setMessageType("invisible")
        }
    }

    function onEditBook(title) {
        console.warn("WIP: Must navigate to EditBookForm for book: " + title)
    }

    function onRemoveBook(title) {
        setBooks(books.filter((b) => b.title !== title))
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
