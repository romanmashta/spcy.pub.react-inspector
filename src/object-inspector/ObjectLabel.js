import React from 'react';
import PropTypes from 'prop-types';
import ObjectName from '../object/ObjectName';
import ObjectValue from '../object/ObjectValue';
import ObjectPreview from './ObjectPreview';

import { useStyles } from '../styles';

/**
 * if isNonenumerable is specified, render the name dimmed
 */
const ObjectLabel = ({ name, data, type, isNonenumerable = false }) => {
  const object = data;
  const themeStyles = useStyles('ObjectValue');

  const mkStyle = key => ({ ...themeStyles[key]});

  return (
    <span>
      {typeof name === 'string' ? (
        <ObjectName name={name} dimmed={isNonenumerable} />
      ) : (
        <ObjectPreview data={name} />
      )}
      <span>: </span>
      <span style={mkStyle('objectValueUndefined')}>{type} </span>
      <ObjectValue object={object} />
    </span>
  );
};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: PropTypes.bool,
};

export default ObjectLabel;
