import React from 'react'
import moment from 'moment'

import formaMoney from '../../assets/scripts/utils/formatMoney'
import Avatar from '../Avatar'


export default function Header(props) {
  return (
    <>
      <div className="header shadow">
        <div className="header-topbar d-flex justify-content-between align-items-center">
          <Avatar img={props.img}/>
          <h1 className="topbar-username text-light">{props.name}</h1>
          <button className="btn btn-danger rounded" onClick={props.closeSession}><i className="fas fa-sign-out-alt"></i></button>
        </div>
        <div className="header-content d-flex flex-wrap justify-content-center">
          <h2 className="w-100 text-center text-light">{moment().format("D/MMMM/YYYY")}</h2>
          <p className="text-light">Você está devendo: R$ <strong>{formaMoney(0)}</strong></p>
        </div>
      </div>
    </>
  )
}
