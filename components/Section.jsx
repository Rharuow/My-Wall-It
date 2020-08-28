import React from 'react'

export default function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <div className="section shadow">
        <div className="section-header d-flex justify-content-center">
          <h3 className="header-title"><i className={`${props.icon} header-title-icon`}></i>{props.title}</h3>
        </div>
        <div className="section-body">

        </div>
        <div className="section-footer">

        </div>
      </div>
    </>
  )
}
