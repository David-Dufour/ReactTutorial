import { useState } from 'react'
import BookAdder from './component/bookAdder/BookAdder.js';
import BookViewer from './component/bookViewer/BookViewer.js';

function App() {
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
      setMessageType("bg-light")
    }
  }

  function onEditBook(book) {
    console.log("EDITING " + book.title)
  }

  function onRemoveBook(book) {
    setBooks(books.filter((b) => b !== book))
    console.log("REMOVING " + book.title)
  }

  return (
    <div className="container-fluid px-5">
      <h1 className="text-center py-5">BOOK MANAGER</h1>
      <p className={messageType + " p-3"}>{message}</p>
      <BookAdder addBook={onAddBook} />
      <BookViewer books={books} editBook={onEditBook} removeBook={onRemoveBook} />
    </div>
  );
}

export default App;
