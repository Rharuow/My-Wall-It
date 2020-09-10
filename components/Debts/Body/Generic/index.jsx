import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../Header'
import Footer from '../../Footer'
import Default from './Default'
import Turn from './Turn'

const Generic = ({ info }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: info.participants.length - 1,
    speed: 500
  };

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
        {
          info.type === "turn" &&
          <Turn
            totalValue={info.totalValue}
            currentMonth={info.currentMonth}
            turn={info.turn}
            own={info.own}
            createdAt={info.createdAt}
            dueDate={info.dueDate}
            status={info.status}
          />
        }
      </div>
      <Footer participants={info.participants} turn={info.turn} own={info.own} />
    </>
  )
}

Generic.propTypes = {
  info: PropTypes.object
}

export default Generic
