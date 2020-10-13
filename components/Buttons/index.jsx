import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ icon, className, spanClassName, text, onClick }) => {
  return (
    <div className={`button d-flex align-items-center justify-content-center ${className ? className : ""}`} onClick={onClick}>
      {
        icon ?
          <span className={icon}></span>
          :
          <span className={spanClassName}>{text}</span>
      }
    </div>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  spanClassName: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
