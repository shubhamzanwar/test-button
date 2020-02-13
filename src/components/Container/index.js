import React, { Component } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import url from '../../constants/url'

class Container extends Component {
    state={
        text:''
    }

    componentDidMount = async() => {
        const res = await axios.get(url.initialTextLink);
        this.setState({
            text: res.data.initialText
        })
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
                <TextBox onChange={(this.onChange)} testId={testIdTextBox} />
                <Button text={this.state.text} buttonType="round" testId={testIdButton}/>
            </div>
        )
    }
}

export default Container
