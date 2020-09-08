import React from 'react'

import Rent from '../Debts/Body/Rent'
import Water from '../Debts/Body/Water'
import Energy from '../Debts/Body/Energy'
import Gas from '../Debts/Body/Gas'
import Internet from '../Debts/Body/Internet'
import Supermarket from '../Debts/Body/Supermarket'

export default function Board(props) {
  return (
    <>
      <div className="board shadow d-flex flex-column justify-content-center align-item-center">
        {
          props.debt.title === "rent" &&
          <Rent info={props.debt} />
        }
        {
          props.debt.title === "water" &&
          <Water info={props.debt} />
        }
        {
          props.debt.title === "energy" &&
          <Energy info={props.debt} />
        }
        {
          props.debt.title === "gas" &&
          <Gas info={props.debt} />
        }
        {
          props.debt.title === "internet" &&
          <Internet info={props.debt} />
        }
        {
          props.debt.title === "supermarket" &&
          <Supermarket info={props.debt} />
        }
      </div>
    </>
  )
}
