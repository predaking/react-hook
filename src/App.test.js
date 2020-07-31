/*
 * @Author: Gong Wei
 * @Date: 2020-07-20 17:13:46
 * @LastEditor: Gong Wei
 * @LastEditTime: 2020-07-29 20:59:54
 * @Description:
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
