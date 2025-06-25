import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Diamond, Spade, Club } from 'lucide-react';

export type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
export type Value = 'A' | 'K' | 'Q' | 'J' | '10' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';

export interface CardProps {
  suit: Suit;
  value: Value;
  className?: string;
}

const suitConfig: Record<Suit, { Icon: React.ElementType; color: string }> = {
  Hearts: { Icon: Heart, color: 'text-red-600' },
  Diamonds: { Icon: Diamond, color: 'text-red-600' },
  Clubs: { Icon: Club, color: 'text-foreground' },
  Spades: { Icon: Spade, color: 'text-foreground' },
};

const Card: React.FC<CardProps> = ({ suit, value, className }) => {
  const { Icon, color } = suitConfig[suit];

  return (
    <div
      className={cn(
        'relative flex aspect-[2.5/3.5] w-full items-center justify-center rounded-lg border bg-card p-2 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className={cn('absolute left-1.5 top-1 font-bold text-base md:left-2 md:top-1.5 md:text-xl', color)}>
        {value}
      </div>

      <Icon className={cn('h-6 w-6 md:h-10 md:w-10', color)} fill="currentColor" />

      <div className={cn('absolute bottom-1 right-1.5 rotate-180 font-bold text-base md:bottom-1.5 md:right-2 md:text-xl', color)}>
        {value}
      </div>
    </div>
  );
};

export default Card;
