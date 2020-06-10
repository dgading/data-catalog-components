import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTablePageSizer from './index';

describe('<DataTablePageSizer />', () => {
  test('Loads default props', () => {
    render(<DataTablePageSizer
      pageSizeChange={() => ({})}
      id="test-id"
    />);
    expect(screen.getByLabelText('Rows per page'));
    expect(screen.getByDisplayValue('20'));
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '100' } });
    expect(screen.getByDisplayValue('100'));
  });

  test('Loads custom props', () => {
    render(<DataTablePageSizer
      label="Page Sizer"
      pageSizeChange={() => ({})}
      id="test-id"
      initSize={75}
      options={[
        { label: '10', value: '10' },
        { label: '25', value: '25' },
        { label: '75', value: '75' },
      ]}
    />);
    expect(screen.getByLabelText('Page Sizer'));
    expect(screen.getByDisplayValue('75'));
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '10' } });
    expect(screen.getByDisplayValue('10'));
  });
});
