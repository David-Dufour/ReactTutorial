import Book from '../models/Book'
import CardItem from '../components/CardItem'

function toViewModel(book: Book): CardItem {
    const key = book.title;
    const title = book.title;
    const year = book.year;
    const subtitle = book.author;
    const description = book.description;

    return new CardItem(key, title, year, subtitle, description)
}

function toViewModels(books: Array<Book>): Array<CardItem> {
    return books.map(book => toViewModel(book))
}

export { toViewModel, toViewModels };