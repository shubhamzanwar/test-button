import React from 'react';
import Input from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the input component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Input />);

        expect(asFragment()).toMatchSnapshot();
    });
    it('should pass its text to the prop when the input is changed', () => {
        const mockOnChange = jest.fn();
        const { getByTestId } = render(<Input testID="test-input" onChange={mockOnChange}/>);

        fireEvent.change(getByTestId("test-input"), {target: {value: "123"}});
        expect(mockOnChange).toHaveBeenCalledWith("123");
    })
});