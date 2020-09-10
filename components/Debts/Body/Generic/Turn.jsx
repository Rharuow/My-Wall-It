import React from 'react'
import PropTypes from 'prop-types'

import { getStatus } from '../../../../assets/scripts/utils/translate'
import formatMoney from '../../../../assets/scripts/utils/formatMoney'

const Turn = ({ totalValue, currentMonth, turn, own, createdAt, dueDate, status }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Valor: <strong className="text-center">R$ {formatMoney(totalValue)}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{own}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Devedor atual: <strong className="text-center">{turn}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Inicio: <strong className="text-center">{createdAt}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Mês atual: <strong className="text-center">{currentMonth}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{dueDate === "" ? "--/--/--" : dueDate}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${status == "activate" ? "paid" : "late"}`}>{getStatus(status)}</span></li>
    </ul>
  )
}

Turn.propTypes = {
  totalValue: PropTypes.number,
  own: PropTypes.string,
  createdAt: PropTypes.string,
  currentMonth: PropTypes.string,
  turn: PropTypes.string,
  dueDate: PropTypes.string,
  status: PropTypes.string
}

export default Turn
