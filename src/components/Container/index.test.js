import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Container from '../Container';
import axios from 'axios';
import url from '../../constants/urls';
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
    it('should display the content from the api in the input', async() => {
        const mockAxiosGet = jest.spyOn(axios, 'get');
        mockAxiosGet.mockResolvedValue({data: {initialText:"unicorn"}});
        const { getByTestId } = render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='test-input'/>);
        expect(mockAxiosGet).toHaveBeenCalledWith(url.url);
        await wait(() => 
            expect(getByTestId('test-input').value).toBe('unicorn')
        );
    });
})