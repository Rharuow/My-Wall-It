import React from 'react'

export default function Avatar(props) {
  return (
    <>
      <div className="avatar border border-light shadow">
        <img src={props.img} alt="avatar"/>
      </div>
    </>
  )
}
