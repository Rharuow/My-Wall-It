import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SelectField from './Debts/Fields/SelectField'
import { debtName } from '../../assets/scripts/utils/translate'

import Header from '../Board/Header'
import Rent from './Debts/Rent'

const Forms = ({ params }) => {

  const [debtType, setDebtType] = useState("")

  const handlerSelect = value => setDebtType(value)

  const debts = params.map(debt => ({
    value: debt.title,
    label: debtName(debt.title)
  }))

  return (
    <>
      <Header name="Cadastre sua dívida" title="new debt" />
      <form>
        <div className="form-group">
          <SelectField
            onChange={e => handlerSelect(e.value)}
            options={debts}
            placeholder="Selecione um tipo de dívida"
            className="text-center"
            labelText="Qual tipo de despesa?"
            styles={{
              valueContainer: (provided) => ({
                ...provided,
                justifyContent: 'center',
              })
            }}
          />
        </div>
        {
          debtType === "rent" &&
          <Rent
            users={[
              {
                "name": "Harysson Soares",
                "email": "haryssonsoares@gmail.com",
                "photo": "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
              },
              {
                "name": "Clara Yasmim",
                "email": "clara@gmail.com",
                "photo": "https://www.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
              },
              {
                "name": "Arthur Cesar",
                "email": "arthur@gmail.com",
                "photo": "https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png"
              },
              {
                "name": "Gabriel Dias",
                "email": "gabrieldias@gmail.com",
                "photo": "https://www.iconfinder.com/data/icons/diversity-avatars-vol-2/64/black-man-bald-beard-512.png"
              },
              {
                "name": "Tayanne Dantas",
                "email": "tayanne@gmail.com",
                "photo": "https://www.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
              }
            ]}
          />
        }
        <button type="submit" className="btn btn-success mt-3">Cadastrar</button>
      </form>
    </>
  )
}

Forms.propTypes = {
  params: PropTypes.array
}

export default Forms
