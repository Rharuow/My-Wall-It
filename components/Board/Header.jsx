import React from 'react'
import PropTypes from 'prop-types'

import { icon, debtName } from '../../assets/scripts/utils/translate'

const Header = ({ title, name }) => {

  return (
    <div className="board-header mt-2 d-flex justify-content-center">
      <h4 className="header-title text-white text-center"><i className={`${title && icon(title)} header-title-icon`}></i><br />{name ? name : debtName(title)}</h4>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
}

export default Header
