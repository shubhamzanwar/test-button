import React, { Component } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
class Container extends Component {
    state={
        text:''
    }

    onChange=(inputTextValue)=>{
        this.setState({
            text:inputTextValue
        })
    }
    async componentDidMount (){
        const intialContent = await axios.get('https://api.myjson.com/bins/1grobk');
        this.setState({
            text: intialContent.data.initialText
        });
    }
    render() {
        const {testId,testIdButton,testIdTextBox}=this.props;
        return (
            <div data-testid={testId}>
                <TextBox value={this.state.text} onChange={(this.onChange)} testId={testIdTextBox} />
                <Button text={this.state.text} buttonType="round" testId={testIdButton}/>
            </div>
        )
    }
}

export default Container
