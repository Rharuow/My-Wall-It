import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className="card shadow">
        <h3 className="card-title border border-secondary"><i className={props.icon}></i>{props.title}</h3>

      </div>
    </>
  )
}
