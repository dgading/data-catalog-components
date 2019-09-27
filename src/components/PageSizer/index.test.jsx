import React from 'react';
import { shallow } from 'enzyme';
import PageSizer from './index';

describe('<PageSizer />', () => {
  const mockCallback = jest.fn((x) => 42 + x);
  const defaultWrapper = shallow(
    <PageSizer
      onChangeFunction={mockCallback}
    />,
  );

  const customWrapper = shallow(
    <PageSizer
      onChangeFunction={mockCallback}
      defaultPagesize={25}
      optionsArray={[25, 100, 1000]}
    />,
  );
  it('renders with default page size of 10', () => {
    expect(defaultWrapper.props().defaultValue).toBe('10');
    expect(defaultWrapper.find('option').length).toBe(4);
    expect(defaultWrapper.find('option').first().text()).toBe('5 per page');
    expect(defaultWrapper.find('option').last().text()).toBe('50 per page');
  });

  it('renders with custom page size and options', () => {
    expect(customWrapper.props().defaultValue).toBe('25');
    expect(customWrapper.find('option').length).toBe(3);
    expect(customWrapper.find('option').first().text()).toBe('25 per page');
    expect(customWrapper.find('option').last().text()).toBe('1000 per page');
  });
});
