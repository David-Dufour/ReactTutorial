import BookRequest from '../infrastructures/BookRequest'
import Book from '../models/Book'

function toModel(bookRequest: BookRequest): Book {
    const title = bookRequest.title;
    const year = bookRequest.publish_date;
    const authorId = bookRequest.authors?.at(0).key || "No authors";
    const description = bookRequest.first_sentence?.value;

    console.log(title)
    console.log(year)
    console.log(authorId)
    console.log(description)
    return new Book(title, year, authorId, description);
}

export { toModel };