import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ status, img, className }) => {
  return (
    <div className={`avatar border-${status !== undefined ? status : 'default'} ${className}`}>
      <img src={img} alt="avatar" />
    </div>
  )
}

Avatar.propTypes = {
  status: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string
}

export default Avatar
