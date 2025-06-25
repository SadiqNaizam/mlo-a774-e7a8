import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, RefreshCcw } from 'lucide-react';
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
    <div className={cn('flex items-center gap-2', className)}>\n      <Button variant=\"secondary\" size=\"sm\" onClick={onShuffle}>\n        <Shuffle className=\"mr-2 h-4 w-4\" />
        Shuffle
      </Button>
      <Button variant=\"secondary\" size=\"sm\" onClick={onReset}>\n        <RefreshCcw className=\"mr-2 h-4 w-4\" />
        Reset Deck
      </Button>
    </div>
  );
};

export default HeaderControls;