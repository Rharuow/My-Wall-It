import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import ToggleButton from 'react-toggle-button'
import Input from '../Fields/Input'
import Money from '../Fields/Money'

const Rent = ({ users }) => {
  const [name, setName] = useState("")
  const [showMoneyField, setShowMoneyField] = useState(false)
  const [totalValue, setTotalValue] = useState("0,00")
  const [splitDebt, setSplitDebt] = useState(false)
  const [equitable, setEquitable] = useState(false)
  const [partcipants, setParticipants] = useState([])

  const options = users.map((user) => ({ value: user.email, label: user.name, photo: user.photo }))

  const houseNameInput = useRef("houseNameInput")
  const totalValueInput = useRef("totalValueInput")

  useEffect(() => {

  }, [partcipants])

  useEffect(() => {
    if (name === "") return setShowMoneyField(false)
    return setShowMoneyField(true)
  }, [name, showMoneyField])

  const handlerParticipants = participants => {
    console.log(participants)
  }

  return (
    <div className="form-group ">
      <Input type="text" inputRef={houseNameInput} onChange={e => setName(e.target.value)} labelText="Qual o nome da casa?" placeholder="Nome da casa" value={name ? name : ""} />
      {
        showMoneyField && (
          <>
            <Money value={totalValue} onChange={e => setTotalValue(e.target.value)} inputRef={totalValueInput} labelText="Qual valor do aluguel?" />
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
                  {
                    equitable ?
                      <div className="col-12">

                      </div>
                      :
                      <div className="col-12">

                      </div>
                  }
                </>
              }
            </div>
          </>
        )
      }
    </div>
  )
}

Rent.propTypes = {
  users: PropTypes.array
}

export default Rent
