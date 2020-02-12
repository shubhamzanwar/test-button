import React from 'react';
import {Container} from './index';
import { render, fireEvent } from '@testing-library/react';


describe('the container component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Container></Container>);
        expect(asFragment()).toMatchSnapshot();
    });

})
