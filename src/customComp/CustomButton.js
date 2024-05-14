import React from 'react';
import PropTypes from 'prop-types';

// CustomButton component
const CustomButton = ({ onClick, children, color, disabled, style }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    ...style, // Merge custom style with default style
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Prop types validation
CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

// Default prop values
CustomButton.defaultProps = {
  color: '#37424c',
  disabled: false,
  style: {},
};

export default CustomButton;
