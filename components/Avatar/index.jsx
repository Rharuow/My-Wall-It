import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ status, img }) => {
  return (
    <>
      <div className={`avatar border-${status !== undefined ? status : 'default'}`}>
        <img src={img} alt="avatar" />
      </div>
    </>
  )
}

Avatar.propTypes = {
  status: PropTypes.string,
  img: PropTypes.string
}

export default Avatar
