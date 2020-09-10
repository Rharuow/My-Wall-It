import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../Header'
import Footer from '../../Footer'
import Default from './Default'

const Generic = ({ info }) => {
  console.log(info)
  return (
    <>
      <Header title={info.title} name={info.name} />
      <div className="board-body mt-2">
        {
          info.type === "default" &&
          <Default
            totalValue={info.totalValue}
            subTotal={info.subTotal}
            own={info.own}
            createdAt={info.createdAt}
            dueDate={info.dueDate}
            status={info.status}
          />
        }
      </div>
      <Footer participants={info.participants} own={info.own} />
    </>
  )
}

Generic.propTypes = {
  info: PropTypes.object
}

export default Generic
