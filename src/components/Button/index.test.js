import React from 'react';
import Button from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the button component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button type="rect" message='sarvani'/>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call the onClick prop when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button type="rect" onClick={onClickMock} message='sarvani'/>);

        fireEvent.click(getByTestId("test-btn"));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render a rectangle shaped button when type is passed as rect', () => {
        const { asFragment} = render(<Button type="rect" message='sarvani'/>);
        expect(asFragment()).toMatchSnapshot();

    });

    it('should render a circle shaped button when type is passed as round', () => {
        const { asFragment} = render(<Button type="round" message='sarvani'/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
})