import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ content, className, contentClassName }) => {
  return (
    <div className={`button-scope rounded-circle d-flex align-items-center justify-content-center ${className ? className : ""}`}>
      <strong className={`${contentClassName ? contentClassName : ""}`}>{content}</strong>
    </div>
  )
}

Circle.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
}

export default Circle
