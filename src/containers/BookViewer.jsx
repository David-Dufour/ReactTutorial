import BookCard from '../components/BookCard.jsx'

export default function BookViewer({ books, editBook, removeBook }) {
    return (
        books.map(book => {
            return <BookCard key={book.title} book={book} edit={editBook} remove={removeBook} />
        })
    )
}
