import React from 'react'

import Rent from './Rent'

export default function Board(props) {
  return (
    <>
      <div className="board shadow">
        { props.debt.title === "aluguel" &&
          <Rent info={props.debt} />
        }
      </div>
    </>
  )
}
