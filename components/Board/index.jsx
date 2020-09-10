import React from 'react'
import PropTypes from 'prop-types'

import Rent from '../Debts/Body/Rent'
import Water from '../Debts/Body/Water'
import Energy from '../Debts/Body/Energy'
import Gas from '../Debts/Body/Gas'
import Internet from '../Debts/Body/Internet'
import Supermarket from '../Debts/Body/Supermarket'
import Generic from '../Debts/Body/Generic/'

const Index = ({ debt }) => {
  return (
    <>
      <div className="board shadow d-flex flex-column justify-content-center align-item-center">
        {
          debt.title === "rent" &&
          <Rent info={debt} />
        }
        {
          debt.title === "water" &&
          <Water info={debt} />
        }
        {
          debt.title === "energy" &&
          <Energy info={debt} />
        }
        {
          debt.title === "gas" &&
          <Gas info={debt} />
        }
        {
          debt.title === "internet" &&
          <Internet info={debt} />
        }
        {
          debt.title === "supermarket" &&
          <Supermarket info={debt} />
        }
        {
          debt.title === "others" &&
          <Generic info={debt} />
        }
      </div>
    </>
  )
}

Index.propTypes = {
  debt: PropTypes.object
}

export default Index
