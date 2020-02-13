import React from 'react';
import Container from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the Container component', () => {
    xit('should render correctly', () => {
        const { asFragment } = render(<Container />);

        expect(asFragment()).toMatchSnapshot();
    });
    it('Should pass the textbox value to the button', () => {
        const { getByTestId } = render(<Container />);

        fireEvent.change(getByTestId("test-input"), {target: {value: "123"}});
        fireEvent.click(getByTestId("test-btn"));
        expect(getByTestId('test-btn')).toHaveTextContent("123 clicked 1 times");
    })
});