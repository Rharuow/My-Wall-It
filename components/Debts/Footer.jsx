import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../Avatar'


const Footer = ({ participants, own }) => {
  return (
    <div className="board-footer mt-2">
      <h5 className="footer-title text-white">Participantes</h5>
      <div className="footer-participants d-flex justify-content-around">
        {participants.map((participant, index) => <Avatar key={index} img={participant["photo"]} status={own === participant["name"] ? "paid" : participant["status"]} />)}
      </div>
    </div>
  )
}

Footer.propTypes = {
  participants: PropTypes.array,
  own: PropTypes.string
}

export default Footer
