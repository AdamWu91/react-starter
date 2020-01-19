import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import App from '@components/App/Index';

test('renders learn react link', () => {
  const result = shallow(<App />).contains('Learn React');
  expect(result).toBeTruthy();
});

test('check app snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
