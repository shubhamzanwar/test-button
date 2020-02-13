import React from 'react';
import TextBoxContainer from './index';
import { render, fireEvent } from '@testing-library/react';

describe('The TextBoxContainer Component', () => {
    it ('should render correctly', () => {
        const { asFragment } = render(<TextBoxContainer />);

        expect(asFragment()).toMatchSnapshot();
    });
    it ('should display the content in the texbox on the button', () => {
        const {getByTestId} = render(<TextBoxContainer/>);
        fireEvent.change(getByTestId("test-input"),{ target: { value:"sarvani"}});
        expect(getByTestId('test-btn')).toHaveTextContent("sarvani clicked 0 times")
    });
});