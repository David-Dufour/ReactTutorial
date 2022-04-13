import Card from '../components/Card'
import CardItem from '../components/CardItem'

export default function BookViewer({ books, editBook, removeBook }) {
    return (
        books.map(book => {
            let cardItem = new CardItem(book.title, book.year, book.author, book.description)
            return <Card key={book.title} item={cardItem} edit={editBook} remove={removeBook} />
        })
    )
}
