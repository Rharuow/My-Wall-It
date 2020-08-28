import React from 'react'

import Expenses from './Expenses'

export default function Board(props) {

  return (
    <>
      <div className="board shadow">
        { props.expenses &&
          <Expenses expenses={props.expenses} />
        }
      </div>
    </>
  )
}
