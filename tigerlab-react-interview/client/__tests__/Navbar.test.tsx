import { render, fireEvent, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { createMockRouter } from '../tests-utils/createMockRouter';
import Navbar from '../components/Layouts/Navbar';

describe('navbar component', () => {
  it('render all the links', () => {
    const { getByText, getByRole } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    const homeLink = getByText('Home');
    const historyLink = getByText('History');
    const tigerlabLink = getByText('tigerlab.');
    const button = getByRole('button');

    expect(homeLink).toBeVisible();
    expect(historyLink).toBeVisible();
    expect(tigerlabLink).toBeVisible();
    expect(button).toBeInTheDocument();
  });

  it('navigate to history page when History link is clicked', () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByText('History'));

    expect(router.push).toHaveBeenCalledWith('/history', '/history', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it('navigate to home page when Home link is clicked', () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByText('Home'));

    expect(router.push).toHaveBeenCalledWith('/', '/', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it('navigate to home page when tigerlab link is clicked', () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByText('tigerlab.'));

    expect(router.push).toHaveBeenCalledWith('/', '/', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
