import React from 'react';
import './cardButton.css';

const CardButton = ({ isInteracting, onClick, text, color }) => (
  <button className="cardButton" onClick={onClick} style={{ backgroundColor: color }}>
    <div>{
      isInteracting ?
      <img className="cardButton__spinner" src={require('../assets/spinner.gif')} alt="Spinning loader"></img>
        :
        text
      }
    </div>
  </button>
);

export default CardButton;