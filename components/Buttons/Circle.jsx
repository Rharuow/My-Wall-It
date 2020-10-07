import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ content, className, contentClassName }) => {
  return (
    <div className="button">
      <div className={`button-scope rounded-circle d-flex align-items-center justify-content-center ${className ? className : ""}`}>
        <storng className={`button-content ${contentClassName ? contentClassName : ""}`}>{content}</storng>
      </div>
    </div>
  )
}

Circle.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
}

export default Circle
