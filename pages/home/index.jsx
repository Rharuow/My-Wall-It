import React from 'react'
import PropTypes from 'prop-types'
import { signOut, useSession } from 'next-auth/client'
import Slider from "react-slick";

import Header from '../../components/common/Header'
import Board from '../../components/Board'

import test from '../../data/test.json'
import parametersToCreateDebts from '../../data/parametersToCreateDebtss.json'

const Home = () => {
  const [session, loading] = useSession()

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="main">
      <Header name={session.user.name} img={session.user.image} closeSession={signOut} />
      <div className="section">
        <h3 className="section-title">Despesas atuais</h3>
        <Slider {...settings}>
          {
            test["user"]["debt"].map(debt => (
              <Board key={debt} debt={debt} />
            ))
          }
        </Slider>
      </div>
      <div className="section mt-2">
        <h3 className="section-title">Novas Despesas</h3>
        <Board createDebt={parametersToCreateDebts} />
      </div>
    </div>
  )
}

Home.propTypes = {

}

export default Home