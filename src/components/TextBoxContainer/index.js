import React from 'react';
import TextBox from '../TextBox';
import { Button } from '../Button';

class TextBoxContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            counter: 0
        };
    }
    updateMessage = (message) => {
        this.setState({
            text: message
        });
    }
    countClick = () => {
        const {counter} = this.state;
        this.setState({
            counter: counter + 1
        });
    }
    render(){
        const {text, counter} = this.state;
        return(
            <div>
                <TextBox testID="test-input" type="text" onChange={(event) => {this.updateMessage(event)} }/>
                 <Button testID="test-btn" type="round" message={text} count={counter} onClick={this.countClick}/>
            </div>
        );
    }
}

export default TextBoxContainer;