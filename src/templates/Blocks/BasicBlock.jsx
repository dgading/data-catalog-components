/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Text';

class BasicBlock extends React.PureComponent {
  render() {
    const { content } = this.props;

    return (
      <div key={content.ref} className="basic-block">
        <h2>{content.title}</h2>
        <Text value={content.content} />
      </div>
    )
  }
}

BasicBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export default BasicBlock
