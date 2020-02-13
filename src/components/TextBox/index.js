import React from 'react'

function TextBox({testId, onChange, text}) {
    return (
        <div> 
            <input value={text} type="text" data-testid={testId} onChange={(e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
