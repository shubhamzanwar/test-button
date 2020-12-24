import React from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import useInput from '../../hooks/useInput'

const Container = (props) => {
    const [text, setText] = useInput('');
    const onChange=(inputTextValue)=>{
        setText(inputTextValue)
    }
    const {testId,testIdButton,testIdTextBox, disabled}=props;
    return (
        <div data-testid={testId}>
            <TextBox onChange={(onChange)} testId={testIdTextBox} value = {text} disabled={disabled}/>
            <Button text={text} buttonType="round" testId={testIdButton} click = {() => {}}/>
        </div>
    );
}

export default Container
