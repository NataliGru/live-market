import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

function PauseButton({ onPause }: { onPause: () => void }) {
  return <button onClick={onPause}>Pause</button>;
}

describe('PauseButton', () => {
  it('renders the pause button', () => {
    render(<PauseButton onPause={() => {}} />);

    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument();
  });

  it('calls onPause when clicked', async () => {
    const handlePause = vi.fn();

    const user = userEvent.setup();

    render(<PauseButton onPause={handlePause} />);

    const pauseButton = screen.getByRole('button', { name: 'Pause' });

    await user.click(pauseButton);

    expect(handlePause).toHaveBeenCalledTimes(1);
  });
});
