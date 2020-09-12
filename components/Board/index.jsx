import React from 'react'
import PropTypes from 'prop-types'

import Form from '../Form'
import Rent from '../Debts/Body/Rent'
import Water from '../Debts/Body/Water'
import Energy from '../Debts/Body/Energy'
import Gas from '../Debts/Body/Gas'
import Internet from '../Debts/Body/Internet'
import Supermarket from '../Debts/Body/Supermarket'
import Generic from '../Debts/Body/Generic/'

const Index = ({ debt, createDebt }) => {
  return (
    <>
      <div className="board shadow d-flex flex-column justify-content-center align-item-center">
        {
          debt && debt.title === "rent" &&
          <Rent info={debt} />
        }
        {
          debt && debt.title === "water" &&
          <Water info={debt} />
        }
        {
          debt && debt.title === "energy" &&
          <Energy info={debt} />
        }
        {
          debt && debt.title === "gas" &&
          <Gas info={debt} />
        }
        {
          debt && debt.title === "internet" &&
          <Internet info={debt} />
        }
        {
          debt && debt.title === "supermarket" &&
          <Supermarket info={debt} />
        }
        {
          debt && debt.title === "others" &&
          <Generic info={debt} />
        }
        {
          createDebt &&
          <Form params={createDebt} />
        }
      </div>
    </>
  )
}

Index.propTypes = {
  debt: PropTypes.object,
  createDebt: PropTypes.array
}

export default Index
