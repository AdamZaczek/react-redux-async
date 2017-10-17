import React from 'react';
import './cardHeader.css';

const CardHeader = ({ name, image, action, date }) => {
  return (
    <div className="cardHeader">
      <img className="cardHeader__image" src={require('../' + image)} alt="Users avatar"></img>
      <div className="cardHeader__text">
        <p className="cardHeader__name">{name}</p> shared this contact
        <div className="cardHeader__date">{date}</div>
      </div>
      <div className="cardHeader__border" />
    </div>
)};

export default CardHeader;