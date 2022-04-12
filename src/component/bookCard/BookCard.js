import PropTypes from 'prop-types'
import Book from '../../model/Book'

BookItem.propTypes = {
  book: PropTypes.instanceOf(Book).isRequired,
  editBook: PropTypes.func,
}

export default function BookItem({ book, editBook }) {

  function onCardClick() {
    editBook(book)
  }

  return (
    <div className="card text-white bg-primary my-4">
      <div className="card-body">
        <h5 className="card-title pt-1">{book.title} ({book.year})</h5>
        <h5 className="card-subtitle">{book.author}</h5>
        <p className="card-text">{book.description}</p>
        <a href="#" className="stretched-link" onClick={onCardClick} />
      </div>
    </div>
  )
}