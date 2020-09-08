import React from 'react'
import PropTypes from 'prop-types'

import formatMoney from '../../../assets/scripts/utils/formatMoney'

import Header from '../Header'
import Footer from '../Footer'

import { status } from '../../../assets/scripts/utils/translate'

const Energy = ({ info }) => {

  return (
    <>
      <Header title={info.title} />
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(info.totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(info.subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{info.own}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Data da dívida: <strong className="text-center">{info.createdAt}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{info.dueDate === "" ? "--/--/--" : info.dueDate}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${info.status}`}>{status(info.status)}</span></li>
        </ul>
      </div>
      <Footer participants={info.participants} own={info.own} />
    </>
  )
}

Energy.propTypes = {
  info: PropTypes.object
}

export default Energy
