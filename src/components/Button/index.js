import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children, testID, onClick, type,
}) => {
  const style = type === 'rounded' ? { borderRadius: '50%' } : {};
  return (

    <button style={style} data-testid={testID} onClick={() => onClick()}>
      {children}
    </button>

  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
