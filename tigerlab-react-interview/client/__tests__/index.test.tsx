import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../pages';

describe('home page', () => {
  it('show summary and overview when requests succeeded', async () => {
    render(<Home />);

    const overviewCards = await screen.findAllByRole('listitem');
    const summaryCards = await screen.findAllByText('Name');

    expect(overviewCards).not.toHaveLength(0);
    expect(summaryCards).not.toHaveLength(0);
  });

  it('fetch summary and overview when the run test button is clicked', async () => {
    render(<Home />);

    const button = await screen.findByRole('button', {
      name: 'Run all tests again',
    });

    fireEvent.click(button);

    const overviewCards = await screen.findAllByRole('listitem');
    const summaryCards = await screen.findAllByText('Name');

    expect(overviewCards).not.toHaveLength(0);
    expect(summaryCards).not.toHaveLength(0);
  });
});
