import React from 'react';


const Input = (props) => {
    const {onChange, testID} = props;
    return(
        <input type="text" data-testid = {testID} onChange = {(event) => onChange(event.target.value)}/>
    );
}
export default Input;