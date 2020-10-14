import React from 'react'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'

const Draggable = ({ type = "" }) => {
  const [{ isDragging }, drag] = useDrag(
    {
      item: { type },
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
    }
  )

  // console.log(collectedProps)
  return (
    <div ref={drag}>
      <h1>TESTE 1</h1>
      <h1>TESTE 2</h1>
    </div>
  )
}

Draggable.propTypes = {

}

export default Draggable
