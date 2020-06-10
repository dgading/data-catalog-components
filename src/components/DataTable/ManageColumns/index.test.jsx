import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ManageColumns from './index';
import { ResourceDispatch } from '../../../services/resource/resource_defaults';

describe('<ManageColumns />', () => {
  test('Loads a button by default', () => {
    render(
      <ResourceDispatch.Provider value={{
        resourceState: {},
        dispatch: () => ({}),
        reactTable: { allColumns: [] },
      }}
      >
        <ManageColumns />
      </ResourceDispatch.Provider>,
    );
    expect(screen.getByText('Manage Columns')).toHaveAttribute('type', 'button');
  });
});
