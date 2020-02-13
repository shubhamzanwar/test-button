import React from 'react';
import {Container} from './index';
import { render, fireEvent } from '@testing-library/react';


describe('the container component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Container></Container>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the text entered in the input box in the button', () => {
        const {getByTestId} = render(<Container></Container>);
        fireEvent.change(getByTestId("test-input"),{ target: { value:"Roh"}});
        expect(getByTestId('test-btn')).toHaveTextContent("Roh clicked 0 times")
    });
});
