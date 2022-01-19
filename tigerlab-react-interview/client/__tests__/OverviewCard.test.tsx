import { render } from '@testing-library/react';

import OverviewCard from '../components/Overview/OverviewCard';

describe('overview card component', () => {
  it('renders an overview card', () => {
    const props = { title: 'Tests ran', valueNumber: 10, index: 0 };

    const { getByText } = render(<OverviewCard {...props} />);

    const title = getByText(props.title);
    const valueNumber = getByText(props.valueNumber);

    expect(title).toBeVisible();
    expect(valueNumber).toBeVisible();
  });
});
