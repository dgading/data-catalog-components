import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Card from './Card';

describe('<Card />', () => {
  test('Loads a div by default', () => {
    render(
      <DndProvider backend={Backend}>
        <Card
          id="123"
          index={1}
          moveCard={() => ({})}
        >
          <p>dkan</p>
        </Card>
      </DndProvider>,
    );
    expect(screen.getByText('dkan'));
    const isDiv = screen.queryByRole('listitem');
    expect(screen.getByText('dkan').closest('div')).toHaveStyle({ opacity: 1 });
    expect(isDiv).toBeNull();
  });
  test('Loads a list item', () => {
    render(
      <DndProvider backend={Backend}>
        <Card
          id="123"
          index={1}
          moveCard={() => ({})}
          useListItem
        >
          <p>dkan</p>
        </Card>
      </DndProvider>,
    );
    expect(screen.getByText('dkan'));
    expect(screen.getByRole('listitem'));
  });
});
