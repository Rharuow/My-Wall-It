import React from 'react'
import PropTypes from 'prop-types'

import formatMoney from '../../assets/scripts/utils/formatMoney'
import Avatar from '../Avatar'

const Footer = ({ participants, own, turn }) => {
  return (
    <div className="board-footer mt-2">
      <h5 className="footer-title text-white">Participantes</h5>
      <div className="footer-participants d-flex flex-wrap justify-content-around">
        {participants.map((participant, index) =>
          <div key={`div${index}`} className="footer-participants-info d-flex flex-column justify-content-center">
            <Avatar key={index} img={participant["photo"]} className={`m-auto ${turn == participant["name"] && "highlight"}`} status={participant["name"] == own ? "default" : participant["status"]}
            />
            <span key={`span-name-${index}`} className={`text-center text-${participant["name"] == own ? "default" : participant["status"]}`}><strong>{participant["name"].split(" ")[0]}</strong></span>
            {
              !turn &&
              <span key={`span-value-${index}`} className={`text-center text-${participant["name"] == own ? "default" : participant["status"]}`}><strong>R$ {formatMoney(participant["value"])}</strong></span>
            }
          </div>
        )}
      </div>
    </div>
  )
}

Footer.propTypes = {
  participants: PropTypes.array,
  own: PropTypes.string,
  turn: PropTypes.string,
}

export default Footer
