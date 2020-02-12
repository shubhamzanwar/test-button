import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Container from '../Container';

describe('The container component',()=>{
    it('should check if the button component works',()=>{
        const {asFragment}=render(<Container/>)
    })
})