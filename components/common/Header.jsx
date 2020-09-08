import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import formaMoney from '../../assets/scripts/utils/formatMoney'
import Avatar from '../Avatar'


const Header = ({ img, name, closeSession }) => {
  return (
    <>
      <div className="header shadow">
        <div className="header-topbar d-flex justify-content-between align-items-center">
          <Avatar img={img} />
          <h1 className="topbar-username text-light">{name}</h1>
          <button className="btn btn-danger rounded" onClick={closeSession}><i className="fas fa-sign-out-alt"></i></button>
        </div>
        <div className="header-content d-flex flex-wrap justify-content-center">
          <h2 className="w-100 text-center text-light">{moment().format("D/MMMM/YYYY")}</h2>
          <p className="text-light">Você está devendo: R$ <strong>{formaMoney(0)}</strong></p>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  closeSession: PropTypes.func
}

export default Header
