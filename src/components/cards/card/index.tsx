// Card.jsx
import React from 'react';
import { CardData } from '../../../models';

interface CardProps {
  cardData: CardData;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className='w-[360px] h-auto  bg-[#000] rounded-2xl p-6 text-white'>
      <div className='text-center pb-7'>
        <h1 className='text-[#ffc628] py-3 text-xl'>Size uygun Kart</h1>
        <h2>{cardData.cardName}</h2>
        <p>Bank: {cardData.bankOfCard}</p>
        <p>Card Type: {cardData.cardType}</p>
      </div>
      
      <div className='text-center'>
        <h2 className='text-[#ffc628] py-3 text-xl'>Ayliq Cashback </h2>
        <p>Ərzaq: {cardData.cashback.store}</p>
        <p>Nəqliyyat: {cardData.cashback.fuel}</p>
        <p>Sağlamlıq və Qulluq: {cardData.cashback.grocers}</p>
        <p>Əyləncə və Həvəskarlıq: {cardData.cashback.other}</p>
      </div>
    </div>
  );
};

export default Card;
