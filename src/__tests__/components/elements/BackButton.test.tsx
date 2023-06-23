import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BackButton from '@/common/components/elements/BackButton';

describe('BackButton', () => {
  test('renders BackButton component with correct text and icon', () => {
    const url = '/home';
    render(<BackButton url={url} />);

    const backButton = screen.getByText('Back');
    expect(backButton).toBeInTheDocument();

    const icon = screen.getByTestId('back-icon');
    expect(icon).toBeInTheDocument();
  });

  test('navigates to the correct URL when clicked', () => {
    const url = '/home';
    render(<BackButton url={url} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', url);

    userEvent.click(link);
  });
});
