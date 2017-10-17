import React from 'react';
import './cardFooter.css';

const CardFooter = () => (
  <div className="cardFooter">
    <img className="cardFooter__thumbs" src={require('../assets/thumbs-up.png')} alt="Thumbs up"></img>
    <img className="cardFooter__comment" src={require('../assets/comment.png')} alt="Comment"></img>
    <img className="cardFooter__share" src={require('../assets/share.png')} alt="Share"></img>
  </div>
);

export default CardFooter;