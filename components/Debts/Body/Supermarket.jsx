import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FadeIn from 'react-fade-in';

import formatMoney from '../../../assets/scripts/utils/formatMoney'

import Header from '../../Board/Header'
import Footer from '../../Board/Footer'

import { getStatus } from '../../../assets/scripts/utils/translate'

const Supermarket = ({ info }) => {

  const [showTable, setShowTable] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

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
      <Header title={info.title} />
      <div className="board-body mt-2">
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Local: <strong className="text-center">{info.local}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Total: <strong className="text-center">R$ {formatMoney(info.totalValue)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Sua parte: <strong className="text-center">R$ {formatMoney(info.subTotal)}</strong></li>
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Pagar para: <strong className="text-center">{info.own}</strong></li>
          <li className={`list-group-item d-flex justify-content-center fas fa-chevron-${showDetails ? 'up' : 'down'}`} onClick={toogleDetails}></li>
          {
            showDetails &&
            <FadeIn delay={100} transitionDuration={800}>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Data da dívida: <strong className="text-center">{info.createdAt}</strong></li>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Dia do pagamento: <strong className="text-center">{info.weekDay}</strong></li>
              <li className="list-group-item list-group-item-dark d-flex justify-content-between">Vencimento: <strong className="text-center">{info.dueDate === "" ? "--/--/--" : info.dueDate}</strong></li>
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
                    info.itens.map(item => (
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
          <li className="list-group-item list-group-item-dark d-flex justify-content-between">Status: <span className={`bge bge-${info.status}`}>{getStatus(info.status)}</span></li>
        </ul>
      </div>
      <Footer participants={info.participants} own={info.own} />
    </>
  )
}

Supermarket.propTypes = {
  info: PropTypes.object
}

export default Supermarket