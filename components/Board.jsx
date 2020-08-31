import React from 'react'

import Rent from './debts/body/Rent'
import Water from './debts/body/Water'
import Energy from './debts/body/Energy'
import Gas from './debts/body/Gas'
import Internet from './debts/body/Internet'
import Supermarket from './debts/body/Supermarket'

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
