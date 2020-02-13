import React, { useState } from 'react'
import * as styles from './index.css';

const Button = (props) => {
  const {text, buttonType, testId, click} = props;
  const [count, setCount] = useState(0);

  const countHandler = () => {
    click();
    setCount(count + 1);
  }
  return (
    <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testId} onClick={() => countHandler()}>
        {text} clicked {count} times.
      </button> 
  )
};


export default Button;

