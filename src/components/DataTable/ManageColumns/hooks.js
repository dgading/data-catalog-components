import React from 'react';
import update from 'immutability-helper';

export function useSetColumnOrder(cards, reactTable) {
  React.useEffect(() => {
    if (cards) {
      reactTable.setColumnOrder(cards.map((d) => d.id));
    }
  }, [cards]);
}

export function useSetCards(cards, setCards, allColumns) {
  React.useEffect(() => {
    if (allColumns.length && cards === null) {
      setCards(allColumns);
    }
  }, [allColumns]);
}

export function useMoveCard(cards, setCards, reactTable) {
  return React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = reactTable.allColumns[dragIndex];
      setCards(update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }));
    },
    [cards, reactTable.allColumns],
  );
}
