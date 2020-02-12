import React from 'react';
import Container from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the Container component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Container />);

        expect(asFragment()).toMatchSnapshot();
    });
});