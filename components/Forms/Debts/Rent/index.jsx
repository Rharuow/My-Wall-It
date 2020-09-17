import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Input from '../Fields/Input'
import Money from '../Fields/Money'

const Rent = ({ fields }) => {
  const [name, setName] = useState("")
  const [showMoneyField, setShowMoneyField] = useState(false)
  const [totalValue, setTotalValue] = useState("0,00")
  const houseNameInput = useRef("houseNameInput")
  const totalValueInput = useRef("totalValueInput")

  useEffect(() => {
    if (name === "") return setShowMoneyField(false)
    return setShowMoneyField(true)
  }, [name, showMoneyField])

  return (
    <div className="form-group ">
      <Input type="text" inputRef={houseNameInput} onChange={e => setName(e.target.value)} labelText="Qual o nome da casa?" placeholder="Nome da casa" value={name ? name : ""} />
      {
        showMoneyField &&
        <Money value={totalValue} onChange={e => setTotalValue(e.target.value)} inputRef={totalValueInput} labelText="Digite o valor total do aluguel" />
      }
      <div className="form-row">
        <div className="col">

        </div>
        <div className="col">

        </div>
      </div>
    </div>
  )
}

Rent.propTypes = {
  fields: PropTypes.object
}

export default Rent
