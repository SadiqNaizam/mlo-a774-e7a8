import React from 'react';
import { LayoutGrid } from 'lucide-react';
import HeaderControls from './HeaderControls';
import { cn } from '@/lib/utils';

interface HeaderProps {
  /**
   * Callback function to be invoked when the shuffle button is clicked.
   * This should handle the logic for shuffling the deck of cards.
   */
  onShuffle: () => void;
  /**
   * Callback function to be invoked when the sort button is clicked.
   * This should handle the logic for sorting the deck back to its initial state.
   */
  onReset: () => void;
  className?: string;
}

/**
 * The main header component for the application.
 * It displays the application title and action controls.
 */
const Header: React.FC<HeaderProps> = ({ onShuffle, onReset, className }) => {
  return (
    <header
      className={cn(
        'flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <LayoutGrid className="h-6 w-6 text-primary" />
        <h1 className="text-lg font-semibold text-foreground">
          Deck of Cards UI
        </h1>
      </div>
      <HeaderControls onShuffle={onShuffle} onReset={onReset} />
    </header>
  );
};

export default Header;
