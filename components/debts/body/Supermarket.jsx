import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';

import formatMoney from '../../../assets/scripts/utils/formatMoney'

import Header from '../Header'
import Footer from '../Footer'

import { status } from '../../../assets/scripts/utils/translate'

export default function Supermarket(props) {

  const [ showTable, setShowTable ] = useState(false)
  const [ showDetails, setShowDetails ] = useState(false)

  const toogleTable = () => {
    const tempShowTable = !showTable
    setShowTable(tempShowTable)
  }

  const toogleDetails = () => {
    const tempShowDetails = !showDetails
    setShowDetails(tempShowDetails)
  }

  return (
    <>
      <Header title={props.info.title}/>
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Local: <strong className="text-center">{props.info.local}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(props.info.totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(props.info.subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{props.info.own}</strong></li>
          <li className={`list-group-item d-flex justify-content-center fas fa-chevron-${showDetails ? 'up' : 'down'}`} onClick={toogleDetails}></li>
          {
            showDetails &&
            <FadeIn delay={100} transitionDuration={800}>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Data do pagamento: <strong className="text-center">{props.info.payDay}</strong></li>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Dia do pagamento: <strong className="text-center">{props.info.weekDay}</strong></li>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{props.info.dueDate === "" ? "--/--/--" : props.info.dueDate}</strong></li>
              <li className="list-group-item list-group-item-dark d-flex justify-content-center" id="dropdown-products" onClick={toogleTable}><strong className="text-center">Produtos <i className={`fas fa-angle-${showTable ? 'up' : 'down'}`}></i></strong></li>
            </FadeIn>
          }
          { 
            showTable &&
            <FadeIn delay={100} transitionDuration={800}>
              <table className="table table-striped table-dark m-0">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Produto</th>
                    <th scope="col" className="text-center">Valor base</th>
                    <th scope="col" className="text-center">Quantidade</th>
                    <th scope="col" className="text-center">Valor total</th>
                  </tr>
                </thead>
                <tbody>
                {
                  props.info.itens.map( item => (
                    <tr key={item.id}>
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">R$ {formatMoney(item.price)}</td>
                      <td className="text-center">{item.amount}</td>
                      <td className="text-center">R$ {formatMoney(item.amount * item.price)}</td>
                    </tr>
                    )
                  )
                }
                </tbody>
              </table>
            </FadeIn>
          }
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${props.info.status}`}>{status(props.info.status)}</span></li>
        </ul>
      </div>
      <Footer participants={props.info.participants} own={props.info.own}/>
    </>
  )
}