import React from 'react';
import * as styles from './index.module.css'

class Button extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0
        }
    }

    increment = () => {

    }

    render () {
        const {children, testID, onClick, type} = this.props;
        return(
            <button className ={type === 'rect'? styles.rect : styles.round} data-testid={testID} onClick={() => onClick()}>
                {children} clicked {this.state.clickCount} times
            </button> 
        )}
}

export {Button};
