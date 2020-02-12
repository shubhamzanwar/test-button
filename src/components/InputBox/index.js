import React from 'react';

const InputBox=({onChange,testID})=>
 <input type="text" data-testid={testID} onChange={(e)=>{onChange(e.target.value)}}></input>

export {InputBox};
