import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import avatar from './avatar.png'



const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <img className="image" src={avatar} width="300" />
          <h2 className="name">{props.name}</h2>
          <h3 className="speed">Speed: {props.speed}</h3>
          <h3 className="color">Color: {props.color}</h3>
      </div>
  );
};

export default Card;