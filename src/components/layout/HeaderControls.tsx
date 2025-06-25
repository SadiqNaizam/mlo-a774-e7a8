import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, ArrowDownUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderControlsProps {
  /**
   * Callback function to be invoked when the shuffle button is clicked.
   */
  onShuffle: () => void;
  /**
   * Callback function to be invoked when the sort button is clicked.
   */
  onReset: () => void;
  className?: string;
}

/**
 * A component that renders the primary action buttons for the deck,
 * such as shuffling and sorting.
 */
const HeaderControls: React.FC<HeaderControlsProps> = ({ onShuffle, onReset, className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button variant="secondary" size="sm" onClick={onShuffle}>
        <Shuffle className="mr-2 h-4 w-4" />
        Shuffle
      </Button>
      <Button variant="secondary" size="sm" onClick={onReset}>
        <ArrowDownUp className="mr-2 h-4 w-4" />
        Sort
      </Button>
    </div>
  );
};

export default HeaderControls;
