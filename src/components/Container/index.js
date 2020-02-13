import React from 'react';
import Input from '../Input'
import Button from '../Button'

class Container extends React.Component{

    state = {
        inputText : ''
    }
    getInputText = (text) => {
        //console.log(text)
        this.setState({
            inputText : text
        })
    }
    render(){
        return <div>
            <Input testID = "test-input" onChange = {this.getInputText}/>
            <Button testID = "test-btn" name={this.state.inputText}/>
        </div>

    }

}
export default Container;