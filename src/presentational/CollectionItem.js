import React from 'react';
import moment from 'moment';
import CardHeader from './CardHeader';
import CardBody from '../container/CardBody';
import CardFooter from './CardFooter';
import './collectionItem.css';

const CollectionItem = ({ item }) => {
  const { name, image, action, timestamp } = item.header.user;
  const { body } = item;
  const formattedDate = moment(timestamp).format('Do MMMM YYYY, h:mm:ss a');
  return (
    <div className="collectionItem">
      <CardHeader
        name={name}
        image={image}
        action={action}
        date={formattedDate}
      />
      <CardBody
        body={body}
      />
      <CardFooter />
    </div>
  )
};

export default CollectionItem;