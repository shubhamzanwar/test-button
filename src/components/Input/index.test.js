import React from 'react';
import Input from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the input component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Input />);

        expect(asFragment()).toMatchSnapshot();
    });
});