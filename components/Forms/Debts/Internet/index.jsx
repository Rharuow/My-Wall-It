import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import makeAnimated from 'react-select/animated'
import moment from 'moment'
import { useSession } from 'next-auth/client'
import ToggleButton from 'react-toggle-button'

import DateField from '../Fields/Date'
import Money from '../Fields/Money'
import SelectField from '../Fields/SelectField'
import { getMoneyValue } from '../../../../assets/scripts/utils/translate'

const Internet = ({ users }) => {

  const [session, loading] = useSession()
  const allUser = users.map((user, index) => ({ id: index, email: user.email, name: user.name, photo: user.photo, status: "pending", value: 0 }))
  const options = allUser.filter(user => user.email !== session.user.email)
  const initialParticipantsState = [{ id: 0, email: session.user.email, name: session.user.name, photo: session.user.image, status: "pending", value: 0 }]

  const [startDate, setStartDate] = useState(moment().format("yyyy-MM-DD"));
  const [showParticipantsValues, setShowParticipantsValues] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [splitDebt, setSplitDebt] = useState(false)
  const [equitable, setEquitable] = useState(false)
  const [participants, setParticipants] = useState(initialParticipantsState)
  const [currentParticipant, setCurrentParticipant] = useState()

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
      setParticipants(initialParticipantsState)
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
    subTotal > totalValue && handlerParticipantValue(0, currentParticipant)
  }, [subTotal])

  return (
    <>
      <DateField date={startDate} onChange={date => setStartDate(date)} labelText="Próximo pagamento" name="dueDate" />

      <Money value={totalValue} onChange={e => handlerTotalValue(e)} name={"totalValueInput"} labelText="Qual valor da internete?" />
      <div className="form-row">
        <div className={`col-${splitDebt ? "6" : "12"} d-flex flex-column align-items-center`}>
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
            <div className={`col-6 d-flex flex-column align-items-center`}>
              <label>Divisão por igual?</label>
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
            <div className="col-12">
              <SelectField
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={options.map(participant => ({ value: participant.email, label: participant.name, photo: participant.photo }))}
                onChange={e => handlerParticipants(e)}
                placeholder="Selecione os participantes"
                labelText="Quem vai rachar essa dívida com vc?"
              />
            </div>
            <div className="col-12">
              {
                showParticipantsValues &&
                participants.map((participant, index) => <Money
                  key={index}
                  name={`eachValueInput-${participant.email}`}
                  disabled={equitable}
                  labelText={`Parte de ${participant.name.split(" ")[0]}`}
                  value={participant.value}
                  onChange={e => handlerParticipantValue(getMoneyValue(e), participant.email)}
                />)
              }
            </div>
          </>
        }
      </div>
    </>
  )
}

Internet.propTypes = {
  user: PropTypes.object
}

export default Internet
