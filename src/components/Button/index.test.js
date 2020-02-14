import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Button  from './index';
import '../Button';


describe('the button component', () => {

  it('should render correctly', () => {
    const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" click={onClickMock}></Button>);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should render corrctly when the type:rect is passed to the component', () => {
    
    const { asFragment } = render(<Button testID="test-btn" buttonType="rect" />);

    expect(asFragment).toMatchSnapshot();
  });

  it('should render corrctly when the type:round is passed to the component', () => {
    const onClickMock = jest.fn();
    const { asFragment } = render(<Button testID="test-btn" buttonType="round" onClick={onClickMock} />);

    expect(asFragment).toMatchSnapshot();

  });

  it('should display the expected text on the button with clickCount',()=>{
    const onClickMock=jest.fn();
    const {getByTestId}=render(<Button testId="test-btn" buttonType="rect" click={onClickMock} text="Bhumika"/>);
    fireEvent.click(getByTestId("test-btn"));
    expect(getByTestId('test-btn')).toHaveTextContent("Bhumika clicked 1 times.");
  })
});
