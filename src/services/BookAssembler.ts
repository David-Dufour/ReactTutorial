import BookRequest, { DescriptionRequest } from '../infrastructures/BookRequest'
import Book from '../models/Book'

function toModel(bookRequest: BookRequest): Book {
    const title = bookRequest.title;
    const year = bookRequest.publish_date;
    const authorId = "wip_author_id";

    let description = ""
    let typeOfDescription = typeof (bookRequest.description)
    if (typeOfDescription == "string" && bookRequest.description) {
        description = bookRequest.description as string
    }
    else if (typeOfDescription == "object") {
        description = (bookRequest.description as DescriptionRequest).value
    }
    else if (bookRequest.subtitle && typeof (bookRequest.subtitle) == "string") {
        description = bookRequest.subtitle
    }

    return new Book(title, year, authorId, description);
}

export { toModel };