import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Card, { type CardProps, type Suit, type Value } from '@/components/CardOverviewGrid/Card';

// Define the suits and values for a standard 52-card deck.
const SUITS: Suit[] = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const VALUES: Value[] = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/**
 * Generates a standard, sorted 52-card deck.
 * @returns {CardProps[]} An array of card objects, sorted by suit then value.
 */
const generateInitialDeck = (): CardProps[] => {
  return SUITS.flatMap(suit => 
    VALUES.map(value => ({ suit, value }))
  );
};

// Store the initial deck in a constant to use for initialization and resetting.
const initialDeck = generateInitialDeck();

/**
 * The main page component for the Deck of Cards UI application.
 * It orchestrates the display and interaction with the deck, featuring
 * controls for shuffling, resetting, and "playing" (removing) cards from the grid.
 */
const IndexPage: React.FC = () => {
  const [deck, setDeck] = useState<CardProps[]>(initialDeck);

  /**
   * Shuffles the current deck of cards into a random order.
   * Uses the Fisher-Yates shuffle algorithm for an unbiased shuffle.
   */
  const handleShuffle = useCallback(() => {
    setDeck(currentDeck => {
      const newDeck = [...currentDeck];
      for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
      }
      return newDeck;
    });
  }, []);

  /**
   * Resets the deck of cards to its original, full, and sorted state.
   */
  const handleReset = useCallback(() => {
    setDeck(initialDeck);
  }, []);

  /**
   * Handles a card being clicked, which removes it from the current deck.
   * @param {CardProps} cardToRemove The card object to remove from the deck.
   */
  const handleCardClick = useCallback((cardToRemove: CardProps) => {
    setDeck(currentDeck =>
      currentDeck.filter(
        card => !(card.suit === cardToRemove.suit && card.value === cardToRemove.value),
      ),
    );
  }, []);


  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header onShuffle={handleShuffle} onReset={handleReset} />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-13 gap-2 sm:gap-4">
          <AnimatePresence>
            {deck.map(({ suit, value }) => (
              <Card 
                key={`${suit}-${value}`} 
                suit={suit} 
                value={value} 
                onClick={() => handleCardClick({ suit, value })}
              />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;