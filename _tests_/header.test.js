import React from 'react';
import Header from '../src/components/header';

import {shallow} from 'enzyme';

describe('Header should render', () => {

  it('Header should recieve props', () =>{
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  })

})