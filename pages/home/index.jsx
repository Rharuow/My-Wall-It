import React from 'react';
import { signOut, useSession } from 'next-auth/client'
import Slider from "react-slick";

import Header from '../../components/common/Header'
import Board from '../../components/Board'

const Home =() => {
  const [ session, loading ] = useSession()

  const expenses = [
  {
    id: 1,
    title: "aluguel",
    name: "Beréu",
    totalValue: 700,
    subTotal: 220,
    status: "paid",
    participants: [
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/22228289_101615837263584_1141010751091235462_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=0Ui1q9tgk88AX9ZS71R&_nc_ht=scontent.fnat1-1.fna&oh=e25bb4d6664e9eb06970adc33f639fa8&oe=5F70C0E7",
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/115909641_2941271965983104_7264211982262482516_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=uMoe0WnDUc4AX9AcQUE&_nc_ht=scontent.fnat1-1.fna&oh=6f21aec89b6b2d7ea0d76e65335bdebe&oe=5F702BC2",
    ]
  },
  {
    id: 2,
    title: "aluguel",
    name: "Beréu",
    totalValue: 700,
    subTotal: 220,
    status: "paid",
    participants: [
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/22228289_101615837263584_1141010751091235462_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=0Ui1q9tgk88AX9ZS71R&_nc_ht=scontent.fnat1-1.fna&oh=e25bb4d6664e9eb06970adc33f639fa8&oe=5F70C0E7",
      "https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/115909641_2941271965983104_7264211982262482516_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=uMoe0WnDUc4AX9AcQUE&_nc_ht=scontent.fnat1-1.fna&oh=6f21aec89b6b2d7ea0d76e65335bdebe&oe=5F702BC2",
    ]
  },
]

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
      <Header name={session.user.name} img={session.user.image} closeSession={signOut}/>
      <div className="section">
        <h3 className="section-title">Despesas atuais</h3>
        <Slider {...settings}>
          {
            expenses.map( expense => (
              <Board key={expense.id} expense={expense}/>
            ))
          }
        </Slider>
      </div>
      <div className="section">
        <h3 className="section-title">Cadastrar Novas Despesas</h3>
      </div>
    </div>
  )
}

export default Home