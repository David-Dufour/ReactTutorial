import BookCard from '../bookCard/BookCard'

export default function BookViewer({ books, editBook }) {
    return (
        books.map(book => {
            return <BookCard key={book.title} book={book} editBook={editBook} />
        })
    )
}
