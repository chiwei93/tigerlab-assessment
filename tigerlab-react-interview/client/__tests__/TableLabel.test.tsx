import { render } from '@testing-library/react';

import TableLabel from '../components/Table/TableLabel';

describe('table label component', () => {
  it('renders a table label correctly', () => {
    const props = { title: 'Name', titleString: 'Check system information' };

    const { getByText } = render(<TableLabel {...props} />);

    const title = getByText(props.title);
    const titleString = getByText(props.titleString);

    expect(title).toBeVisible();
    expect(titleString).toBeVisible();
  });
});
