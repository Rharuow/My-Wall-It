import React from 'react'

import Avatar from '../Avatar'


export default function Footer(props) {
  return (
    <div className="board-footer mt-2">
      <h5 className="footer-title text-white">Participantes</h5>
      <div className="footer-participants d-flex justify-content-around">
        {props.participants.map( (participant, index) => <Avatar  key={index} img={participant["photo"]} status={props.own === participant["name"] ? "paid" : participant["status"] }/>)}
      </div>
    </div>
  )
}
