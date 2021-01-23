import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading />);

    expect(screen.getByRole('heading', { name: /hello world/i }));
  });
});
