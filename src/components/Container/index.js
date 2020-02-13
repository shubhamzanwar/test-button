import React, { Component } from 'react';
import Axios from 'axios';
import Button from '../Button';
import TextBox from '../TextBox';
import {EXTERNAL_API} from '../../constants/urls';

class Container extends Component {
    state={
        text:''
    }

    async componentDidMount() {
        const {data} = await Axios.get(EXTERNAL_API);
        this.setState({text: data.initialText});
    }

    onChange=(inputTextValue)=>{
        this.setState({
            text:inputTextValue
        })
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
