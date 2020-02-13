import React from 'react';
import * as styles from './index.module.css'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    countClick = () => {
        const {counter} = this.state;
        this.setState({
            counter: counter + 1
        });
    }
    render(){
        const {message, type} = this.props;
        return(
            <div className="componentButton">
                <button className ={type === 'rect'? styles.rect : styles.round} data-testid="test-btn" onClick={this.countClick} message={message}>
                {`${message} clicked ${this.state.counter} times`}
                </button>
            </div>
        );
    }
}

export default Button;