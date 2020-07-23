import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
const ObjectName = ({ name, dimmed = false, styles = {} }) => {
  const themeStyles = useStyles('ObjectName');
  const appliedStyles = {
    ...themeStyles.base,
    ...(dimmed ? themeStyles['dimmed'] : {}),
    ...styles,
  };

  return <span style={appliedStyles}>{name}</span>;
};

ObjectName.propTypes = {
  /** Property name */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Should property name be dimmed */
  dimmed: PropTypes.bool,
};

export default ObjectName;
