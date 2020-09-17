import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { debtName } from '../../assets/scripts/utils/translate'

import Header from '../Board/Header'
import Rent from './Debts/Rent'
import Select from './Debts/Fields/Select'


const Forms = ({ params }) => {

  const [debtType, setDebtType] = useState("")

  const handlerSelect = value => setDebtType(value)

  const debts = params.map(debt => ({
    value: debt.title,
    name: debtName(debt.title)
  }))

  const debtTypeInput = useRef("debtTypeInput")

  return (
    <>
      <Header name="Cadastre sua dívida" title="new debt" />
      <form>
        <div className="form-group">
          <Select
            refInput={debtTypeInput}
            onChange={(e) => handlerSelect(e.target.value)}
            id="type-debt"
            labelText="Qual tipo da dívida?"
            options={debts}
            classNameOptions="debt-name"
          />
          {
            debtType === "rent" &&
            <Rent
              fields={params[0].fields}
            />
          }
        </div>
      </form>
    </>
  )
}

Forms.propTypes = {
  params: PropTypes.array
}

export default Forms
