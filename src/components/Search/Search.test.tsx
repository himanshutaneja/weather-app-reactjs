import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Search from './Search';
import { SearchBar } from './styles';

describe('Search', () => {
  let wrapper: ShallowWrapper;

  const onSearchMock = jest.fn();
  const setStateMock = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  beforeEach(() => {
    jest.clearAllMocks();
    //@ts-ignore
    useStateSpy.mockImplementation(init => [init, setStateMock]);
    wrapper = shallow(
      <Search placeholderText="Enter search term..." onSearch={onSearchMock} />,
    );
  });

  it('should render search bar correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should clear placeholder on focus', () => {
    act(() => {
      wrapper.find(SearchBar).simulate('focus');
    });

    expect(setStateMock).toHaveBeenCalledWith('');
  });

  it('should reset placeholder to input prop on blur', () => {
    act(() => {
      wrapper.find(SearchBar).simulate('blur');
    });

    expect(setStateMock).toHaveBeenCalledWith('Enter search term...');
  });

  it('should change input value of controlled input element', () => {
    act(() => {
      wrapper
        .find(SearchBar)
        .simulate('change', { target: { value: 'new search term' } });
    });

    expect(setStateMock).toHaveBeenCalledWith('new search term');
  });

  it('should invoke onSearch handler on enter key press', () => {
    act(() => {
      wrapper.find(SearchBar).simulate('keypress', { key: 'Enter' });
    });

    expect(onSearchMock).toHaveBeenCalled();
  });
});
