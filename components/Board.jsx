import React from 'react'

import Rent from './Rent'

export default function Board(props) {
  return (
    <>
      <div className="board shadow">
        { props.expense.title === "aluguel" &&
          <Rent info={props.expense} />
        }
      </div>
    </>
  )
}
