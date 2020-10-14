import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import makeAnimated from 'react-select/animated'
import { useSession } from 'next-auth/client'
import moment from 'moment'

import SelectField from '../Fields/SelectField'
import DateField from '../Fields/Date'
import ToggleButton from 'react-toggle-button'
import Input from '../Fields/Input'
import Money from '../Fields/Money'
import { getMoneyValue } from '../../../../assets/scripts/utils/translate'
import Circle from '../../../Buttons/Circle'
import List from '../../../List'
import Draggable from '../../../Draggable'

const Generic = ({ users }) => {
  const [session, loading] = useSession()
  const allUser = users.map((user, index) => ({ id: index, email: user.email, name: user.name, photo: user.photo, status: "pending", value: 0 }))
  const options = allUser.filter(user => user.email !== session.user.email)
  const initialParticipantsState = [{ id: 0, email: session.user.email, name: session.user.name, photo: session.user.image, status: "pending", value: 0 }]

  const [name, setName] = useState("")
  const [showMoneyField, setShowMoneyField] = useState(false)
  const [details, setDetails] = useState(false)
  const [products, setProducts] = useState([{
    id: 0,
    name: "",
    price: 0.0,
    amount: ""
  }])
  const [showParticipantsValues, setShowParticipantsValues] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [turnDebt, setTurnDebt] = useState(false)
  const [splitDebt, setSplitDebt] = useState(false)
  const [equitable, setEquitable] = useState(false)
  const [participants, setParticipants] = useState(initialParticipantsState)
  const [currentParticipant, setCurrentParticipant] = useState()
  const [startDate, setStartDate] = useState(moment().format("yyyy-MM-DD"));

  const handlerTotalValue = value => setTotalValue(getMoneyValue(value))

  const handlerParticipants = parts => {
    if (parts !== null) {
      const tempParticipants = parts.map((part, index) => (
        {
          id: index,
          email: part.value,
          name: part.label,
          photo: part.photo,
          status: "pending",
          value: equitable ?
            (totalValue / (parts.length + 1))
            :
            0
        }))
      tempParticipants.push({
        id: 0,
        email: session.user.email,
        name: session.user.name,
        photo: session.user.image,
        status: "pending",
        value: equitable ?
          (totalValue / (parts.length + 1))
          :
          0
      })

      setParticipants(tempParticipants)
    } else {
      const tempParticipants = [{
        id: 0,
        email: session.user.email,
        name: session.user.name,
        photo: session.user.image,
        status: "pending",
        value: equitable ?
          totalValue
          :
          0
      }]
      setParticipants(tempParticipants)
    }
  }

  const handlerParticipantValue = (value, email) => {
    setCurrentParticipant(email)
    const tempParticipants = participants.map(participant => {
      if (participant.email === email) {
        return ({ ...participant, value: value })
      }
      return ({ ...participant })
    })
    setParticipants(tempParticipants)
  }

  const handlerProductsName = (value, key) => {
    const tempProducts = products.map(product => {
      return ({ ...product, name: key === product.id ? value : product.name })
    })
    setProducts(tempProducts)
  }

  const handlerProductsPrice = (value, key) => {
    const tempProducts = products.map(product => ({ ...product, price: key === product.id ? value : product.price }))
    setProducts(tempProducts)
  }

  const handlerProductsAmount = (value, key) => {
    const tempProducts = products.map(product => ({ ...product, amount: key === product.id ? value : product.amount }))
    setProducts(tempProducts)
  }

  const handlerProducts = (type) => {
    const tempProducts = products.map(product => ({ ...product }))
    type === "plus" ?
      tempProducts.push({
        id: products.length,
        name: "",
        price: 0,
        amount: ""
      })
      :
      products.length > 1 && tempProducts.pop()

    setProducts(tempProducts)
  }

  useEffect(() => {
    if (name === "") return setShowMoneyField(false)
    return setShowMoneyField(true)
  }, [name, showMoneyField])

  useEffect(() => {
    if (!equitable) {
      let tempSubTotal = 0
      participants.forEach(participant => tempSubTotal += participant.value)
      setSubTotal(tempSubTotal)
    }
    if (participants.length > 0) return setShowParticipantsValues(true)
    return setShowParticipantsValues(false)
  }, [participants])

  useEffect(() => {
    let tempTotal = 0
    products.forEach(product => {
      tempTotal += product.price
    })
    setTotalValue(tempTotal)
  }, [products])

  useEffect(() => {
    const tempParticipants = participants.map(participant => ({ ...participant, value: equitable ? totalValue / participants.length : 0 }))
    setParticipants(tempParticipants)
  }, [totalValue])

  useEffect(() => {
    subTotal > totalValue && handlerParticipantValue(0, currentParticipant)
  }, [subTotal])

  return (
    <>
      <Input type="text" name={"debt_name"} onChange={e => setName(e.target.value)} labelText="Qual o nome dessa despesa?" placeholder="Nome da despesa" value={name ? name : ""} />

      {
        showMoneyField && (
          <>
            <DateField date={startDate} onChange={date => setStartDate(date)} labelText="Quando a desepesa foi feita?" name="dueDate" />

            <div className="form-group">
              <div className="d-flex flex-column align-items-center">
                <label>Deseja detalhar essa despesa?</label>
                <ToggleButton
                  inactiveLabel="Não"
                  activeLabel="Sim"
                  value={details}
                  onToggle={(value) => {
                    setDetails(!value)
                  }} />
              </div>
            </div>
            {
              !details ?
                <Money value={totalValue ? totalValue : 0} onChange={e =>
                  handlerTotalValue(e)} name={"totalValueInput"} labelText="Qual valor total da despesa?" />
                :
                <div className="form-row mb-4">
                  {
                    products.map((product, index) => {
                      return (
                        <Fragment key={index}>
                          <Input key={`product-name-${index}`} type="text" name={`product-name-${index}`} divClassName="col-4" onChange={e => handlerProductsName(e.target.value, index)} labelText="Produto" placeholder="Nome" value={product.name ? product.name : ""} />

                          <Money key={`product-value-${index}`} value={product.price ? product.price : 0} divClassName="col-4" onChange={e => handlerProductsPrice(getMoneyValue(e), index)} name={`product-value-${index}`} labelText="Valor" />

                          <Input key={`product-amount-${index}`} type="number" min="0" name={`product-amount-${index}`} divClassName="col-4" onChange={e => handlerProductsAmount(e.target.value, index)} labelText="Quantidade" placeholder="ex: 1.5" value={product.amount ? product.amount : ""} />
                        </Fragment>
                      )
                    })
                  }
                  <div className="col-12 d-flex justify-content-around">
                    <Circle icon="fas fa-plus" onClick={() => handlerProducts("plus")} className="btn btn-success mt-2" contentClassName="text-dark" />
                    <Circle icon="fas fa-minus" onClick={() => handlerProducts()} className="btn btn-danger mt-2" contentClassName="text-dark" />
                  </div>
                </div>
            }

            <div className="form-row">
              <div className={`col-${splitDebt ? turnDebt ? "6" : "4" : "12"} d-flex flex-column mb-4 align-items-center`}>
                <label>Vai dividir com alguém?</label>
                <ToggleButton
                  inactiveLabel="Não"
                  activeLabel="Sim"
                  value={splitDebt}
                  onToggle={(value) => {
                    setSplitDebt(!value)
                  }} />
              </div>

              {
                splitDebt &&
                <>
                  <div className={`col-${turnDebt ? "6" : "4"} d-flex flex-column align-items-center`}>
                    <label>É uma depesa por turno?</label>
                    <ToggleButton
                      inactiveLabel="Não"
                      activeLabel="Sim"
                      value={turnDebt}
                      onToggle={value => {
                        setTurnDebt(!value)
                      }} />
                  </div>

                  {!turnDebt &&
                    <div className={`col-4 d-flex flex-column align-items-center`}>
                      <label>Divisão igualmente?</label>
                      <ToggleButton
                        inactiveLabel="Não"
                        activeLabel="Sim"
                        value={equitable}
                        onToggle={(value) => {
                          setEquitable(!value)
                          const tempParticipants = participants.map(participant => ({ ...participant, value: (totalValue / participants.length) }))
                          setParticipants(tempParticipants)
                        }} />
                    </div>
                  }

                  <div className="col-12">
                    <SelectField
                      closeMenuOnSelect={false}
                      components={makeAnimated()}
                      isMulti
                      options={options.map(participant => ({ value: participant.email, label: participant.name, photo: participant.photo }))}
                      onChange={e => handlerParticipants(e)}
                      placeholder="Selecione os participantes"
                      labelText={turnDebt ? "Ordem de pagamento dos participantes" : ""}
                    />
                  </div>

                  {
                    showParticipantsValues &&
                      !turnDebt ?
                      participants.map((participant, index) =>
                        <div key={index} className="col-12">
                          <Money
                            key={index}
                            name={`eachValueInput-${participant.email}`}
                            disabled={equitable}
                            labelText={`Parte de ${participant.name.split(" ")[0]}`}
                            value={participant.value}
                            onChange={e => handlerParticipantValue(getMoneyValue(e), participant.email)}
                          />
                        </div>
                      )
                      :
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <Draggable type="card  " />
                      </div>
                  }
                </>
              }
            </div>
          </>
        )
      }
    </>
  )
}

Generic.prototype = {
  users: PropTypes.object
}


export default Generic
