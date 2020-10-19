import { Card as AntCard} from 'antd';
const { Meta } = AntCard;
import React from 'react';

const Card = props => {
  const {description, img, title} = props;
  return (
    <AntCard
    hoverable
    cover={<img alt={title} src={img} />}
    style={{ width: 240 }}
    title={title}
  >
    <Meta description={description} />    
  </AntCard>
  );
}

export default Card;