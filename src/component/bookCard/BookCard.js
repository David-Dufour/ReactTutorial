import PropTypes from 'prop-types'
import Book from '../../model/Book'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

BookItem.propTypes = {
  book: PropTypes.instanceOf(Book).isRequired,
  editBook: PropTypes.func,
  removeBook: PropTypes.func,
}

export default function BookItem({ book, editBook, removeBook }) {

  function onEditClick() {
    editBook(book)
  }

  function onRemoveClick() {
    removeBook(book)
  }

  return (
    <div className="card text-white bg-dark">
      <div className="row g-0 pt-2 card-header">
        <div className="col-md-2">
          <h4>{book.title}</h4>
        </div>
        <div className="col-md-8">
          <h5>({book.year})</h5>
        </div>
        <div className="col-md-2 ps-5">
          <FontAwesomeIcon className='px-3' icon={faPenToSquare} onClick={onEditClick} />
          <FontAwesomeIcon icon={faXmark} onClick={onRemoveClick} />
        </div>
      </div>

      <div className="card-body text-dark bg-light">
        <h5 className="card-subtitle">{book.author}</h5>
        <p className="card-text">{book.description}</p>
      </div>
    </div>
  )
}
