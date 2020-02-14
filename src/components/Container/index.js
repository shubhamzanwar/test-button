import React, { useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import url from '../../constants/url'

const Container = (props) => {
    
    const [text, setText] = useState('');

    useEffect(() => {
        const asyncFunc = async() => {
        const res = await axios.get(url.initialTextLink);
        setText(
            res.data.initialText
        )
        }
        asyncFunc();
    }, []) 

    const onChange=(inputTextValue)=>{
        setText(
            inputTextValue
        )
    }

        const {testId,testIdButton,testIdTextBox}=props;
        return (
            <div data-testid={testId}>
                <TextBox text={text} onChange={onChange} testId={testIdTextBox} />
                <Button text={text} buttonType="round" testId={testIdButton} click={() => {}}/>
            </div>
        )
}

export default Container
