import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Button  from './index';
import '../index.css';


describe('the button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testID="test-btn" onClick={onClickMock}>Test text</Button>);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalledWith();
  });

  it('should verify the type of button passed (rect) to the component', () => {
    const onClickMock = jest.fn();
    const { buttonType } = render(<Button testID="test-btn" buttonType="rect" onClick={onClickMock} />);

    expect(buttonType).toMatchSnapshot();
  });

});
