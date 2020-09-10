import React from 'react'
import PropTypes from 'prop-types'

import formatMoney from '../../assets/scripts/utils/formatMoney'
import Avatar from '../Avatar'


const Footer = ({ participants, own }) => {
  return (
    <div className="board-footer mt-2">
      <h5 className="footer-title text-white">Participantes</h5>
      <div className="footer-participants d-flex justify-content-around">
        {participants.map((participant, index) =>
          <div key={`div${index}`} className="footer-participants-info">
            <Avatar key={index} img={participant["photo"]} className="m-auto" status={own === participant["name"] ? "paid" : participant["status"]}
            />
            <span key={`span${index}`} className={`text-center lead text-${own === participant["name"] ? "paid" : participant["status"]}`}><strong>R$ {formatMoney(participant["value"])}</strong></span>
          </div>
        )}
      </div>
    </div>
  )
}

Footer.propTypes = {
  participants: PropTypes.array,
  own: PropTypes.string,
}

export default Footer
