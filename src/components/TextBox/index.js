import React from 'react'

function TextBox({testId, onChange, value, disabled}) {
    console.log(value)
    return (
        <div>
            <input disabled={disabled} type="text" data-testid={testId} value = {value} 
            onChange={disabled? () => {} : (e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
