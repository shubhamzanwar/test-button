import React from 'react'

function TextBox({testId, onChange, value}) {
    return (
        <div>
            <input type="text" value={value} data-testid={testId} onChange={(e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
