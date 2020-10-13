import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ icon, className, onClick }) => {
  return (
    <div className={`button rounded-circle d-flex align-items-center justify-content-center ${className ? className : ""}`} onClick={onClick}>
      <span className={`${icon ? icon : ""}`}></span>
    </div>
  )
}

Circle.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Circle
