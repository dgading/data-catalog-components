import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import DefaultCard from './DefaultCard';

describe('<DefaultCard />', () => {
  test('Loads a checkbox and label by default', () => {
    render(
      <DndProvider backend={Backend}>
        <DefaultCard
          card={{
            id: '1',
            Header: 'header label',
            getToggleHiddenProps: () => ({}),
          }}
          index={0}
          moveCard={() => ({})}
        />
      </DndProvider>,
    );
    expect(screen.getByLabelText('header label'));
    // const isDiv = screen.queryByRole('listitem');
    // expect(screen.getByText('dkan').closest('div')).toHaveStyle({ opacity: 1 });
    // expect(isDiv).toBeNull();
  });
});
