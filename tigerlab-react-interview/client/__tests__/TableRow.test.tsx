import { render } from '@testing-library/react';

import TableRow from '../components/Table/TableRow';

describe('table row component', () => {
  it('render a table row with failed text', () => {
    const props = {
      category: 'system',
      test: {
        name: 'Check system information',
        route: '/system/check-system-information',
        result: 'false',
        createdAt: '18/01/2022, 17:28:26',
      },
    };

    const { getByText } = render(<TableRow {...props} />);

    const system = getByText(props.category);
    const name = getByText(props.test.name);
    const result = getByText('Failed');
    const date = getByText(props.test.createdAt);

    expect(system).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('render a table row with success text', () => {
    const props = {
      category: 'system',
      test: {
        name: 'Check system information',
        route: '/system/check-system-information',
        result: 'true',
        createdAt: '18/01/2022, 17:28:26',
      },
    };

    const { getByText } = render(<TableRow {...props} />);

    const system = getByText(props.category);
    const name = getByText(props.test.name);
    const result = getByText('Success');
    const date = getByText(props.test.createdAt);

    expect(system).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
