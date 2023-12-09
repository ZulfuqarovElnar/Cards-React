// Card.jsx
import React from 'react';
import { CardData } from '../../../models';

interface CardProps {
  cardData: CardData;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className='w-12 h-12 bg-black text-center text-white'>
      <h2>{cardData.cardName}</h2>
      <p>Bank: {cardData.bankOfCard}</p>
      <p>Card Type: {cardData.cardType}</p>
    </div>
  );
};

export default Card;
