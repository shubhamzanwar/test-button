import React from 'react';
import axios from 'axios';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Container from '../Container';
import {EXTERNAL_API} from '../../constants/urls';

jest.mock('axios', () => ({
    get: jest.fn(() => ({data: {initialText: "test-initial-value"}}))
}));

afterEach(cleanup);

describe('The container component',()=>{
    it('should check if the button component works',()=>{
        const {asFragment}=render(<Container testId='test-cntner'/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should check if the ',()=>{
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)

        fireEvent.change(getByTestId('123'),{target:{value:'Bhumika'}});
        //fireEvent.click(getByTestId('test-btn'));

       expect(getByTestId('test-btn')).toHaveTextContent('Bhumika clicked 0 times.');

    });

    it('should make an api call and pre-fill the value in the input and button', async (done) => {
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>);
        const input = getByTestId('123');
        const button = getByTestId('test-btn');
        
        setImmediate(() => {
            expect(axios.get).toHaveBeenCalledWith(EXTERNAL_API);
            expect(input.value).toEqual('test-initial-value');
            expect(button).toHaveTextContent(/test-initial-value/);
            done();
        });
    })
})