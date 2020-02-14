import React, { useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import useInput from '../../hooks/useInput/useInput';
import url from '../../constants/urls.json';

const Container = (props) => {
    const {testId, testIdTextBox, testIdButton} = props;
    const [text, setText] = useInput(url.url, '');

    const onChange=(inputTextValue)=>{
        setText(inputTextValue)
    }
    
    return(
        <div data-testid={testId}>
                <TextBox value={text} onChange={(onChange)} testId={testIdTextBox} />
                <Button text={text} buttonType="round" testId={testIdButton}/>
            </div>
    );
}

export default Container
