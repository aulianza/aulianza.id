import { render, screen } from '@testing-library/react';

import Breakline from '@/common/components/elements/Breakline';

describe('Breakline', () => {
  test('renders Breakline component with default styles', () => {
    render(<Breakline />);

    const breakline = screen.getByTestId('breakline');
    expect(breakline).toBeInTheDocument();
    expect(breakline).toHaveClass('border-t');
    expect(breakline).toHaveClass('dark:border-neutral-800');
    expect(breakline).toHaveClass('border-gray-200');
    expect(breakline).toHaveClass('my-4');
  });

  test('renders Breakline component with custom className', () => {
    const customClassName = 'custom-class';
    render(<Breakline className={customClassName} />);

    const breakline = screen.getByTestId('breakline');
    expect(breakline).toBeInTheDocument();
    expect(breakline).toHaveClass('border-t');
    expect(breakline).toHaveClass('dark:border-neutral-800');
    expect(breakline).toHaveClass('border-gray-200');
    expect(breakline).toHaveClass('my-4');
    expect(breakline).toHaveClass(customClassName);
  });

  test('renders Breakline component with additional props', () => {
    const dataTestId = 'custom-breakline';
    const additionalProps = {
      'data-testid': dataTestId,
      'aria-label': 'Custom Breakline',
    };

    render(<Breakline {...additionalProps} />);

    const breakline = screen.getByTestId(dataTestId);
    expect(breakline).toBeInTheDocument();
    expect(breakline).toHaveAttribute('aria-label', 'Custom Breakline');
  });
});
