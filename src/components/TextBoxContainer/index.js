import React from 'react';
import TextBox from '../TextBox';
import Button from '../Button';

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
    render(){
        const {text} = this.state;
        return(
            <div>
                <TextBox testID="test-input" type="text" onChange={(event) => {this.updateMessage(event)} }/>
                 <Button type="round" message={text} />
            </div>
        );
    }
}

export default TextBoxContainer;