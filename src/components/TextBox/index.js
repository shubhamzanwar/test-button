import React from 'react';

function TextBox(props) {
    const {type, onChange, testID} = props;
    return (
       <div>
            <input data-testid={testID} type={type} onChange={(event) => onChange(event.target.value)}/>
       </div>
    );
}

export default TextBox;