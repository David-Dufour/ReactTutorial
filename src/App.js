import { useState } from 'react'
import BookAdder from './component/bookAdder/BookAdder.js';
import BookViewer from './component/bookViewer/BookViewer.js';

function App() {
  const [books, setBooks] = useState([])

  function handleAddBook(book) {
    setBooks([...books, book])
  }

  function onEditBook(book) {
    console.log("EDITING " + book.title)
  }

  return (
    <div className="container-fluid px-5">
      <h1 className="text-center py-5">BOOK MANAGER</h1>
      <BookAdder addBook={handleAddBook} />
      <BookViewer books={books} editBook={onEditBook} />
    </div>
  );
}

export default App;
