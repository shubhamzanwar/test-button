import React from 'react';
import TextBox from './index';
import { render,fireEvent } from '@testing-library/react';

describe('The TextBox Component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<TextBox testID="test-input" type="text"/>);

        expect(asFragment()).toMatchSnapshot();
    });
    it('should call the onChange prop when there is a change in the input box', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(<TextBox testID="test-input" type="text" onChange={onChangeMock} />);

        fireEvent.change(getByTestId("test-input"), {target: {value:'sarvani'}});
        expect(onChangeMock).toHaveBeenCalledWith('sarvani');
    });
});