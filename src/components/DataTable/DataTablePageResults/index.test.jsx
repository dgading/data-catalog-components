import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTablePageResults from './index';

describe('<DataTablePageResults />', () => {
  test('Renders Data Table Results', () => {
    render(<DataTablePageResults
      total={100}
      pageSize={10}
      currentPage={0}
    />);
    expect(screen.getByText((content, node) => {
      const hasText = (n) => n.textContent === '1 - 10 of 100 rows';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child),
      );
      return nodeHasText && childrenDontHaveText;
    }));
  });
});
