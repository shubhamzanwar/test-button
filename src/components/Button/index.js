import React from 'react';
import * as styles from '../index.css';

const Button = ({children, testID, onClick, buttonType,}) => (
  <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testID} onClick={() => onClick()}>
    {children}
  </button>
);

export default Button;
