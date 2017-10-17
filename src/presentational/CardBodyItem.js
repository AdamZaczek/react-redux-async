import React from 'react';
import CardButton from './CardButton';
import './cardBodyItem.css'

const CardBodyItem = ({ image, name, title, company, isInteracting, onClick, text, color }) => (
  <div className="cardBodyItem">
    <img className="cardBodyItem__image" src={require('../' + image)} alt="Users avatar"></img>
    <CardButton
      isInteracting={isInteracting}
      onClick={onClick}
      text={text}
      color={color}
    />
    <div className="cardBodyItem__text">
      <div className="cardBodyItem__name">{name}</div>
      <div className="cardBodyItem__title">{title}</div>
      <div className="cardBodyItem__company">{company}</div>
    </div>
  </div>
);

export default CardBodyItem;