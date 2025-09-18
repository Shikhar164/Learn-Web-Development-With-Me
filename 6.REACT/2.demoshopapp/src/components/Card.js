import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;//props.className is used to apply all css classes of diffrent components differently rather than apply class of card.
  return <div className={classes}> {props.children}</div>;
};

export default Card;