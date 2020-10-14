import React from 'react'
import PropTypes from 'prop-types'

const List = ({ className, itemClassName, items = [] }) => {
  return (
    <ul className={`list-group ${className}`}>
      {
        items.map((item, index) => <li key={index} className={`list-group-item ${itemClassName}`}>{index + 1}º {item}</li>)
      }
    </ul>
  )
}

List.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  items: PropTypes.array
}

export default List
