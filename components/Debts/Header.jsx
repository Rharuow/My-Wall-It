import React from 'react'
import PropTypes from 'prop-types'

import { icon, debtName } from '../../assets/scripts/utils/translate'

const Header = ({ title }) => {

  return (
    <div className="board-header mt-2 d-flex justify-content-center">
      <h4 className="header-title text-white"><i className={`${icon(title)} header-title-icon`}></i>{debtName(title)}</h4>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
