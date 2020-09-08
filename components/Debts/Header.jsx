import React from 'react'

import { icon, debtName } from '../../assets/scripts/utils/translate'

export default function Header(props) {
  return (
    <div className="board-header mt-2 d-flex justify-content-center">
      <h4 className="header-title text-white"><i className={`${icon(props.title)} header-title-icon`}></i>{debtName(props.title)}</h4>
    </div>
  )
}
