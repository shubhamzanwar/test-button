import React from 'react';
import * as styles from './index.module.css';

const Button = ({children, testID, onClick, type}) => {
    const style = type === 'rect'? styles.rect : styles.round;
    return (
    <button className = {style} data-testid={testID} onClick={() => onClick()}>
        {children}
    </button>);
}

export default Button;
