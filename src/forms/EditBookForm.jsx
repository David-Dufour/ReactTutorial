import React from 'react'
import Book from '../../model/Book'

export default function EditBookForm(book, saveBook) {

    BookForm.propTypes = {
        book: PropTypes.instanceOf(Book),
        saveBook: PropTypes.func,
    }

    function save(event) {
        event.preventDefault();
    }

    function cancel(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={save} onAbort={cancel}>
            <h1>WORK IN PROGRESS</h1>
            <label>Title:
                <input type="text" ref={this.input} />
            </label>
            <label>Author:
                <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
