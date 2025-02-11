import React from 'react'
import PropTypes from 'prop-types';

import './Button.css'

const getStyles = (...args) => ['button', ...args].filter(Boolean).join(' ');

const Button = ({ children, type, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={getStyles(type)}> 
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    onClick: () => PropTypes.any,
}

export default Button;
