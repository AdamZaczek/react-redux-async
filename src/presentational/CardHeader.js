import React from 'react';

const CardHeader = ({ name, image, action, date }) => {
  return (
    <div className="cardHeader">
      <img src={require('../' + image)} alt="Users avatar"></img>
      {name} shared this contact
      <div>{date}</div>
    </div>
)};

export default CardHeader;