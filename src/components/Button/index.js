import React from 'react';

import * as styles from './index.module.css'
import { render } from '@testing-library/react';

class Button extends React.Component{
    
    state = {
        clicked:0
    }
    changeState = () => {
        this.setState({
            clicked : this.state.clicked + 1
        });
    }
    render() {
        console.log(this.props.name)
        return  <button className ={this.props.type === 'rect'? styles.rect : styles.round} data-testid={this.props.testID} onClick={() => this.changeState()}>
              {this.props.name} clicked {this.state.clicked} times
        </button> 
    }
}
export default Button;
