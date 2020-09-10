import React from 'react'
import PropTypes from 'prop-types'

import { getStatus } from '../../../../assets/scripts/utils/translate'
import formatMoney from '../../../../assets/scripts/utils/formatMoney'

const Default = ({ totalValue, subTotal, own, createdAt, dueDate, status }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(totalValue)}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(subTotal)}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{own}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Data da dívida: <strong className="text-center">{createdAt}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{dueDate === "" ? "--/--/--" : dueDate}</strong></li>
      <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${status}`}>{getStatus(status)}</span></li>
    </ul>
  )
}

Default.propTypes = {
  totalValue: PropTypes.number,
  subTotal: PropTypes.number,
  own: PropTypes.string,
  createdAt: PropTypes.string,
  dueDate: PropTypes.string,
  status: PropTypes.string
}

export default Default
