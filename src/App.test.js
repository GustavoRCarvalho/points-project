import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('click in screen and verify if a component of circle has been create in the position', () => {
  render(<App />);
  const [X, Y] = [200, 200]

  const display = screen.getByRole('main')

  fireEvent.click(display, {clientX: X, clientY: Y})

  const point = screen.getAllByTestId('circle')

  expect(point[0]).toHaveStyle({top: Y+"px", left: X+"px"})
});

test('click two times and verify if the two component are been showing in the correct positions', () => {
  render(<App />);
  const [X1, Y1] = [100, 100]
  const [X2, Y2] = [200, 200]

  const display = screen.getByRole('main')
  
  fireEvent.click(display, {clientX: X1, clientY: Y1})
  fireEvent.click(display, {clientX: X2, clientY: Y2})

  const point = screen.getAllByTestId('circle')

  expect(point[0]).toHaveStyle({top: Y1+"px", left: X1+"px"})
  expect(point[1]).toHaveStyle({top: Y2+"px", left: X2+"px"})
});

test('click two times in same position and expect to have only one component of circles', () => {
  render(<App />)
  const [X, Y] = [100, 100]

  const display = screen.getByRole('main')

  fireEvent.click(display, {clientX: X, clientY: Y})
  fireEvent.click(display, {clientX: X, clientY: Y})

  const point = screen.getAllByTestId('circle')

  expect(point.length === 1)
});