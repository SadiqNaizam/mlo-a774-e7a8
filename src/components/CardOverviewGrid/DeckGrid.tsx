import React from 'react';
import Card, { type CardProps, type Suit, type Value } from './Card';

const SUITS: Suit[] = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const VALUES: Value[] = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

const deck: CardProps[] = SUITS.flatMap(suit => 
  VALUES.map(value => ({ suit, value }))
);

const DeckGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-13 gap-4 p-4">
      {deck.map(({ suit, value }) => (
        <Card key={`${suit}-${value}`} suit={suit} value={value} />
      ))}
    </div>
  );
};

export default DeckGrid;
