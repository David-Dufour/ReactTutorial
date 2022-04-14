import axios from 'axios';
import Book from '../models/Book'
import BookRequest from './BookRequest'
import { toModel } from '../services/BookAssembler.ts'

const BASE_URL = 'https://openlibrary.org/isbn/';
const CONTENT_TYPE = '.json';

async function fetchBook(isbn: string): Promise<Book> {
    try {
        const data = await axios.get<BookRequest>(BASE_URL + isbn + CONTENT_TYPE).then((response) => {
            if (response === undefined || response.status !== 200) {
                throw new Error("Invalid status code: " + response.status);
            }

            return response.data
        })

        return toModel(data);
    } catch (error) {
    }
    return undefined
}

export { fetchBook };