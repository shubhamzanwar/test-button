import React from 'react';
import * as styles from './index.module.css'

export const Button = ({testID, onClick, type, count, message}) => (
    <button className ={type === 'rect'? styles.rect : styles.round} data-testid={testID} onClick={onClick}>
        {`${message} clicked ${count} times`}
    </button> 
);
