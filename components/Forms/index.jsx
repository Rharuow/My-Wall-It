import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';

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

  const debtTypeInput = useRef("debtTypeInput")

  return (
    <>
      <Header name="Cadastre sua dívida" title="new debt" />
      <form>
        <div className="form-group">
          <Select
            onChange={e => handlerSelect(e.value)}
            options={debts}
            placeholder="Selecione um tipo de dívida"
          />
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
                  "name": "Tayanne",
                  "email": "tayanne@gmail.com",
                  "photo": "https://www.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
                },
                {
                  "name": "Mariangela",
                  "email": "mariangela@gmail.com",
                  "photo": "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                }
              ]}
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
