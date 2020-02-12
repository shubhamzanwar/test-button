import React from 'react';
import {InputBox} from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the inputBox component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<InputBox></InputBox>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onChange function when text is typed into the input box', () => {
        const onChangeMock=jest.fn();
        const { getByTestId } = render(<InputBox testID="test-input" onChange={onChangeMock}></InputBox>);
        fireEvent.change(getByTestId("test-input"),{ target: { value:"Roh"}});
        expect(onChangeMock).toHaveBeenCalledWith("Roh");
    });

})
