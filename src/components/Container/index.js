import React, { Component, useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import url from '../../constants/url'

const Container = (props) => {
    
    const [text, setText] = useState('');

    useEffect(() => {
        const res = axios.get(url.initialTextLink);
        setText(
            res.data.initialText
        )
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
                <Button text={text} buttonType="round" testId={testIdButton}/>
            </div>
        )
}

export default Container
