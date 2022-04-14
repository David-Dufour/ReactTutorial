import BookRequest from '../infrastructures/BookRequest'
import Book from '../models/Book'

function toModel(bookRequest: BookRequest): Book {
    const title = bookRequest.title;
    const year = bookRequest.publish_date;
    const authorId = "wip_author_id";
    const description = bookRequest.first_sentence?.value;

    return new Book(title, year, authorId, description);
}

export { toModel };