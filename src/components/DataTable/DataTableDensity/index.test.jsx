import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTableDensity from './index';

describe('<DataTableDensity />', () => {
  test('Loads default title', () => {
    render(<DataTableDensity
      densityChange={() => ({})}
    />);
    expect(screen.getByText('Display Density'));
  });
  test('Loads 3 default Buttons', () => {
    render(<DataTableDensity
      densityChange={() => ({})}
    />);
    expect(screen.getByTitle('normal')).toHaveAttribute('type', 'button');
    expect(screen.getByTitle('expanded')).toHaveAttribute('type', 'button');
    expect(screen.getByTitle('tight')).toHaveAttribute('type', 'button');
  });

  test('Loads default title', () => {
    render(<DataTableDensity
      densityChange={() => ({})}
      title="Test Title"
    />);
    expect(screen.getByText('Test Title'));
  });
  test('Loads 3 default Buttons', () => {
    render(<DataTableDensity
      densityChange={() => ({})}
      items={[
        { icon: <span>Icon </span>, text: 'first' },
        { icon: <span>Icon </span>, text: 'second' },
        { icon: <span>Icon </span>, text: 'third' },
      ]}
    />);
    expect(screen.getByTitle('first')).toHaveAttribute('type', 'button');
    expect(screen.getByTitle('second')).toHaveAttribute('type', 'button');
    expect(screen.getByTitle('third')).toHaveAttribute('type', 'button');
  });
});
