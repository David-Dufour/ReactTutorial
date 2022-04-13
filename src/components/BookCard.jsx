import PropTypes from 'prop-types'
import Book from '../models/Book'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

BookCard.propTypes = {
  book: PropTypes.instanceOf(Book).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default function BookCard({ book, edit, remove }) {

  function onEditClick() {
    edit(book)
  }

  function onRemoveClick() {
    remove(book)
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
