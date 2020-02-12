import React from 'react';
import {Button} from '../Button';
import {InputBox} from '../InputBox';

class Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputText: ''
        }
    }

    getTextOfInputBox = (text) => {
        this.setState({
            inputText: text
        })
    }

    render() {   
        const {inputText, getTextOfInputBox} = this.state;      
        return (
            <div>
                <InputBox onChange={getTextOfInputBox}></InputBox>
                <Button testID="test-btn" type="round">{inputText}</Button>
            </div>
        )}

}

export {Container};

