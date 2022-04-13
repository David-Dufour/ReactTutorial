export interface AuthorRequest {
    key: string
}

export interface SentenceRequest {
    type: string,
    value: string,
}

export default interface BookRequest {
    publishers: Array<string>,
    number_of_pages: number,
    isbn_10: string,
    isbn_13: Array<string>,
    covers: Array<number>,
    key: string,
    authors: Array<AuthorRequest>,
    contributions: Array<string>,
    ocaid: string,
    title: string,
    publish_date: string,
    first_sentence: SentenceRequest
}