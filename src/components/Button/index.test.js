import React from 'react';
import Button from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the button component', () => {
    xit('should render correctly', () => {
        const { asFragment } = render(<Button testID="test-btn" type="rect"/>);

        expect(asFragment()).toMatchSnapshot();
    });

   xit('should call the onClick prop when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button testID="test-btn" type="rect" onClick={onClickMock}/>);

        fireEvent.click(getByTestId("test-btn"));
        expect(onClickMock).toHaveBeenCalledWith();
    });

    xit('should render a rectangle shaped button when type is passed as rect', () => {
        const { asFragment} = render(<Button testID="test-btn" type="rect"/>);
        expect(asFragment()).toMatchSnapshot();

    });
    xit('should render a circle shaped button when type is passed as round', () => {
        const { asFragment} = render(<Button testID="test-btn" type="round"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('Should display the number of times the button is clicked along with the prop passed', () => {
        const { getByTestId} = render(<Button testID="test-btn" type="round" name = "123"/>);

        fireEvent.click(getByTestId("test-btn"));
        expect(getByTestId("test-btn")).toHaveTextContent("123 clicked 1 times");
    })
});