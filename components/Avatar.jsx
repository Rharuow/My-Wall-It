import React from 'react'

export default function Avatar(props) {
  return (
    <>
      <div className={`avatar border-${props.status !== undefined ? props.status : 'default'}`}>
        <img src={props.img} alt="avatar"/>
      </div>
    </>
  )
}
