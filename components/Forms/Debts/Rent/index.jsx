import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../Fields/Input'

const Rent = ({ fields }) => {
  const [name, setName] = useState("")
  const [totalValue, setTotalValue] = useState("0.00")

  const handlerInputName = value => setName(value)
  const handlerInputTotalValue = value => setTotalValue(value)

  return (
    <>
      <Input type="text" name={`house_${name}`} onChange={e => handlerInputName(e.target.value)} labelText="Qual o nome da casa?" placeholder="Nome da casa" value={name ? name : ""} />

    </>
  )
}

Rent.propTypes = {
  fields: PropTypes.object
}

export default Rent
