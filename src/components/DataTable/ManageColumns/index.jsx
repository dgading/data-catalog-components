import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { ResourceDispatch } from '../../../services/resource/resource_defaults';
import Modal from '../../Modal';
import DefaultCard from './DefaultCard';

import { useSetColumnOrder, useMoveCard, useSetCards } from './hooks';

const ManageColumns = ({
  renderCard,
  nodeTarget,
  modalOpenText,
  modalTitle,
}) => {
  const { reactTable } = useContext(ResourceDispatch);
  const { allColumns } = reactTable;
  const [cards, setCards] = useState(null);
  useSetColumnOrder(cards, reactTable);
  useSetCards(cards, setCards, allColumns);

  return (
    <div>
      <Modal
        title={modalTitle}
        nodeId={nodeTarget}
        openText={modalOpenText}
      >
        <DndProvider backend={Backend}>
          {allColumns
            && allColumns.map(
              (column, i) => renderCard(column, i, useMoveCard(cards, setCards, reactTable)),
            )}
        </DndProvider>
      </Modal>
    </div>
  );
};

ManageColumns.defaultProps = {
  renderCard: DefaultCard,
  nodeTarget: '__gatsby',
  modalOpenText: 'Manage Columns',
  modalTitle: 'Manage Columns',
};

ManageColumns.propTypes = {
  renderCard: PropTypes.func,
  nodeTarget: PropTypes.string,
  modalTitle: PropTypes.string,
  modalOpenText: PropTypes.string,
};

export default ManageColumns;
