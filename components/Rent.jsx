import React from 'react'

import formatMoney from '../utils/formatMoney'
import Avatar from './Avatar'

import Icon from '../utils/icons'
import Status from '../utils/translateStatus'

export default function Rent(props) {

  const icon = Icon(props.info.title)

  return (
    <>
      <div className="board-header mt-2 d-flex justify-content-center">
        <h4 className="header-title text-white"><i className={`${icon} header-title-icon`}></i>{props.info.title}</h4>
      </div>
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Residência: <strong className="text-center">{props.info.name}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(props.info.totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(props.info.subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${props.info.status}`}>{Status(props.info.status)}</span></li>
        </ul>
      </div>
      <div className="board-footer mt-2">
        <h5 className="footer-title text-white">Participantes</h5>
        <div className="footer-participants d-flex justify-content-around">
          {props.info.participants.map( (participant, index) => <Avatar key={index} img={participant}/>)}
        </div>
      </div>
    </>
  )
}
