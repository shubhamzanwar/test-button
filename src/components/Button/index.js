import React, { useState} from 'react'
import * as styles from './index.css';

const Button = (props) => {

  const [count, setCount] = useState(0);

  const countHandler = () => {
    const {click}=props;
    setCount(count + 1)
    click();
  }

    const {text,buttonType,testId}=props;
    return (
      <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testId} onClick={() => countHandler()}>
        {text} clicked {count} times.
      </button> 
    )
  
}


export default Button;


