import React, { useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';

const Container = (props) => {
    const {testId, testIdTextBox, testIdButton} = props;
    const [text, setText] = useState('');

    const onChange=(inputTextValue)=>{
        setText(inputTextValue)
    }

    useEffect(() => {
        async function fetchData() {
            const intialContent = await axios.get('https://api.myjson.com/bins/1grobk');
            setText(intialContent.data.initialText);
        }
        fetchData();
    },[]);

    return(
        <div data-testid={testId}>
                <TextBox value={text} onChange={(onChange)} testId={testIdTextBox} />
                <Button text={text} buttonType="round" testId={testIdButton}/>
            </div>
    );
}

export default Container
