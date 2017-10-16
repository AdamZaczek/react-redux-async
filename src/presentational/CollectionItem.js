import React from 'react';
import moment from 'moment';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const CollectionItem = ({ item }) => {
  const { cardId, name, image, action, timestamp } = item.header.user;
  const { body, footer } = item;
  const formattedDate = moment(timestamp).format('Do MMMM YYYY, h:mm:ss a');
  return (
    <div>
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