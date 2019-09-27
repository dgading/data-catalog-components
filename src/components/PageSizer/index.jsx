import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@cmsgov/design-system-core';

const PageSizer = ({
  defaultPagesize,
  optionsArray,
  onChangeFunction,
  ariaLabel,
  name,
  size,
}) => (
  <Select
    aria-label={ariaLabel}
    defaultValue={defaultPagesize.toString()}
    size={size}
    name={name}
    onChange={onChangeFunction}
  >
    {optionsArray.map((opt) => (
      <option key={opt} value={opt}>{`${opt} per page`}</option>
    ))}
  </Select>
);

PageSizer.defaultProps = {
  defaultPagesize: 10,
  optionsArray: [5, 10, 25, 50],
  ariaLabel: 'Results per page',
  name: 'results_per_page',
  size: 'medium',
};

PageSizer.propTypes = {
  defaultPagesize: PropTypes.number,
  optionsArray: PropTypes.arrayOf(PropTypes.number),
  onChangeFunction: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default PageSizer;
