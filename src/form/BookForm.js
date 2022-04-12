import React from 'react'
import Book from '../../model/Book'

export default function BookForm(book) {

    BookItem.propTypes = {
        book: PropTypes.instanceOf(Book),
        bookClick: PropTypes.func,
      }

    function updateSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={this.updateSubmit}>
            <h1>Uncontrolled Form Example</h1>
            <label>Name:
                <input type="text" ref={this.input} />
            </label>
            <label>
                CompanyName:
                <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
