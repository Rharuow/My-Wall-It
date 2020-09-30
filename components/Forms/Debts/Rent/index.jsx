import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useSession } from 'next-auth/client'

import ToggleButton from 'react-toggle-button'
import Input from '../Fields/Input'
import Money from '../Fields/Money'
import { getMoneyValue } from '../../../../assets/scripts/utils/translate'

const Rent = ({ users }) => {
  const [session, loading] = useSession()
  const allUser = users.map((user, index) => ({ id: index, email: user.email, name: user.name, photo: user.photo, status: "pending", value: "0,00" }))
  const options = allUser.filter(user => user.email !== session.user.email)
  const initialParticipantsState = [{ id: 0, email: session.user.email, name: session.user.name, photo: session.user.image, status: "pending", value: "0,00" }]

  const [name, setName] = useState("")
  const [showMoneyField, setShowMoneyField] = useState(false)
  const [showParticipantsValues, setShowParticipantsValues] = useState(false)
  const [totalValue, setTotalValue] = useState("0,00")
  const [subTotal, setSubTotal] = useState("0,00")
  const [splitDebt, setSplitDebt] = useState(false)
  const [equitable, setEquitable] = useState(false)
  const [participants, setParticipants] = useState(initialParticipantsState)

  const handlerTotalValue = value => setTotalValue(value.split(" ")[1])

  const handlerParticipants = parts => {
    if (parts !== null) {
      const tempParticipants = parts.map((part, index) => ({ id: index, email: part.value, name: part.label, photo: part.photo, status: "pending", value: "0,00" }))
      tempParticipants.push({ id: 0, email: session.user.email, name: session.user.name, photo: session.user.image, status: "pending", value: "0,00" })
      setParticipants(tempParticipants)
    } else {
      setParticipants(initialParticipantsState)
    }
  }

  const propsToValueMoneyEachParticipant = disabled => {
    let onChange, value
    if (disabled) {
      value = getMoneyValue(totalValue) / participants.length
      onChange = (() => setSubTotal(value))
    } else {
      onChange = (e => {
        const email = e.target.name.split("-")[1]
        const tempParticipants = participants.map(participant => {
          if (participant.email !== email) return participant
          return ({ id: participant.id, email: participant.email, name: participant.name, photo: participant.photo, status: "pending", value: e.target.value })
        })
        setParticipants(tempParticipants)
        value = e.target.value
        setSubTotal(getMoneyValue(totalValue) - getMoneyValue(e.target.value))
      })
    }
    const props = { onChange, disabled, value }
    return props
  }

  useEffect(() => {
    if (name === "") return setShowMoneyField(false)
    return setShowMoneyField(true)
  }, [name, showMoneyField])

  useEffect(() => {
    if (participants.length > 0) return setShowParticipantsValues(true)
    return setShowParticipantsValues(false)
  }, [participants, showParticipantsValues])

  useEffect(() => {
    console.log(participants)
  }, [subTotal, participants])

  return (
    <>
      <Input type="text" name={"houseNameInput"} onChange={e => setName(e.target.value)} labelText="Qual o nome da casa?" placeholder="Nome da casa" value={name ? name : ""} />
      {
        showMoneyField && (
          <>
            <Money value={totalValue} onChange={e => handlerTotalValue(e.target.value)} name={"totalValueInput"} labelText="Qual valor do aluguel?" />
            <div className="form-row">
              <div className="col-6">
                <label>Vai dividir a conta?</label>
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
                  <div className="col-6">
                    <label>Divisão por igual?</label>
                    <ToggleButton
                      inactiveLabel="Não"
                      activeLabel="Sim"
                      value={equitable}
                      onToggle={(value) => {
                        setEquitable(!value)
                      }} />
                  </div>
                  <div className="col-12">
                    <Select
                      closeMenuOnSelect={false}
                      components={makeAnimated()}
                      isMulti
                      options={options.map(participant => ({ value: participant.email, label: participant.name, photo: participant.photo }))}
                      onChange={e => handlerParticipants(e)}
                      placeholder="Selecione os participantes"
                      className="mt-3"
                    />
                  </div>
                  <div className="col-12">
                    {
                      showParticipantsValues &&
                      participants.map((participant, index) => <Money key={index} name={`eachValueInput-${participant.email}`} labelText={`Parte de ${participant.name.split(" ")[0]}`} {...propsToValueMoneyEachParticipant(equitable)} />)
                    }
                  </div>
                </>
              }
            </div>
          </>
        )
      }
    </>
  )
}


export default Rent
