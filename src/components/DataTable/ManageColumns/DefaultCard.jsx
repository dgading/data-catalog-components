import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const DefaultCard = ({ card, index, moveCard }) => (
  <Card
    key={card.id}
    index={index}
    id={card.id}
    column={card}
    moveCard={moveCard}
  >
    <label htmlFor={card.id}>
      <input
        id={card.id}
        type="checkbox"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...card.getToggleHiddenProps()}
      />
      {' '}
      {card.Header}
    </label>
  </Card>
);

DefaultCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
};

export default DefaultCard;
