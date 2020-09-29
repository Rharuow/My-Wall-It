import React, { useState, useEffect, useRef } from 'react'
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
  const allUser = users.map(user => ({ value: user.email, label: user.name, photo: user.photo }))
  const options = allUser.filter(user => user.value !== session.user.email)
  const initialParticipantsState = [{ value: session.user.email, label: session.user.name, photo: session.user.image }]

  const houseNameInput = useRef("houseNameInput")
  const totalValueInput = useRef("totalValueInput")

  const [name, setName] = useState("")
  const [showMoneyField, setShowMoneyField] = useState(false)
  const [showParticipantsValues, setShowParticipantsValues] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [splitDebt, setSplitDebt] = useState(false)
  const [equitable, setEquitable] = useState(false)
  const [participants, setParticipants] = useState(initialParticipantsState)

  const handlerTotalValue = value => setTotalValue(value.split(" ")[1])

  const handlerParticipants = parts => {
    if (parts !== null) {
      const tempParticipants = parts.map(part => part)
      tempParticipants.push({ value: session.user.email, label: session.user.name, photo: session.user.image })
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
      onChange = (e => setSubTotal(getMoneyValue(totalValue) - getMoneyValue(e.target.value)))
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
    console.log(subTotal)
  }, [subTotal])

  return (
    <div className="form-group ">
      <Input type="text" inputRef={houseNameInput} onChange={e => setName(e.target.value)} labelText="Qual o nome da casa?" placeholder="Nome da casa" value={name ? name : ""} />
      {
        showMoneyField && (
          <>
            <Money value={totalValue} onChange={e => handlerTotalValue(e.target.value)} inputRef={totalValueInput} labelText="Qual valor do aluguel?" />
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
                      options={options}
                      onChange={e => handlerParticipants(e)}
                      placeholder="Selecione os participantes"
                      className="mt-3"
                    />
                  </div>
                  <div className="col-12">
                    {
                      showParticipantsValues &&
                      participants.map((participant, index) => <Money key={index} labelText={`Parte de ${participant.label.split(" ")[0]}`} {...propsToValueMoneyEachParticipant(equitable)} />)
                    }
                  </div>
                </>
              }
            </div>
          </>
        )
      }
    </div>
  )
}


export default Rent
