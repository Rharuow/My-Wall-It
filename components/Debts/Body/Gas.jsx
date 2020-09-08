import React from 'react'

import formatMoney from '../../../assets/scripts/utils/formatMoney'

import Header from '../Header'
import Footer from '../Footer'

import { status } from '../../../assets/scripts/utils/translate'

export default function Gas(props) {

  return (
    <>
      <Header title={props.info.title} />
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(props.info.totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(props.info.subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{props.info.own}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Data do pagamento: <strong className="text-center">{props.info.payDay}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{props.info.dueDate === "" ? "--/--/--" : props.info.dueDate}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${props.info.status}`}>{status(props.info.status)}</span></li>
        </ul>
      </div>
      <Footer participants={props.info.participants} own={props.info.own} />
    </>
  )
}
