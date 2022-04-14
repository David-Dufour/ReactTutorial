import PropTypes from 'prop-types'
import CardItem from './CardItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

Card.propTypes = {
  item: PropTypes.instanceOf(CardItem).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default function Card({ item, edit, remove }) {

  function onEditClick() {
    edit(item.title)
  }

  function onRemoveClick() {
    remove(item.title)
  }

  return (
    <div className="card text-white bg-dark">
      <div className="row g-0 pt-2 card-header">
        <div className="col-md-11">
          <h4>{item.title} ({item.year})</h4>
        </div>
        <div className="col-md-1">
          <FontAwesomeIcon className='px-3' icon={faPenToSquare} onClick={onEditClick} />
          <FontAwesomeIcon icon={faXmark} onClick={onRemoveClick} />
        </div>
      </div>

      <div className="card-body text-dark bg-light">
        <h5 className="card-subtitle">{item.subtitle}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  )
}
