import axios from 'axios';
import BookRequest from './BookRequest'
import { toModel } from '../services/BookAssembler.ts'

const BASE_URL = 'https://openlibrary.org/isbn/';
const CONTENT_TYPE = '.json';

async function fetchBook(isbn: string): Promise<BookRequest> {
    try {
        const response = await axios.get<BookRequest>(BASE_URL + isbn + CONTENT_TYPE);
        return toModel(response.data);
    } catch (error) {
        console.warn(error);
    }
}

export { fetchBook };