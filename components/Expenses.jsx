import React from 'react'

import formatMoney from '../utils/formatMoney'
import Avatar from './Avatar'

import Icon from '../utils/icons'
import Status from '../utils/translateStatus'

export default function Expenses(props) {

  console.log(props.expenses[0].participants)

  const icon = Icon(props.expenses[0].title)

  return (
    <>
      <div className="board-header mt-2 d-flex justify-content-center">
        <h4 className="header-title text-white"><i className={`${icon} header-title-icon`}></i>{props.expenses[0].title}</h4>
      </div>
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Residência: <strong className="text-center">{props.expenses[0].name}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(props.expenses[0].totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(props.expenses[0].subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${props.expenses[0].status}`}>{Status(props.expenses[0].status)}</span></li>
        </ul>
      </div>
      <div className="board-footer mt-2">
        <h5 className="footer-title text-white">Participantes</h5>
        <div className="footer-participants d-flex justify-content-around">
          {props.expenses[0].participants.map( participant => <Avatar img={participant}/>)}
        </div>
      </div>
    </>
  )
}
