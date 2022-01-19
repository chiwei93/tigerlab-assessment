import { fireEvent, render, screen } from '@testing-library/react';

import HistoryPage from '../pages/history';

describe('history page', () => {
  it('render history title', () => {
    render(<HistoryPage />);

    const history = screen.getByText('History');

    expect(history).toBeVisible();
  });

  it('remove tests history when clear btn is clicked', () => {
    render(<HistoryPage />);

    const clearBtn = screen.getByRole('button', { name: 'Clear' });

    fireEvent.click(clearBtn);

    const text = screen.getByText('No History found.');

    expect(text).toBeVisible();
  });
});
