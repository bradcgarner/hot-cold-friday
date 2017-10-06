import React from 'react';
import TopNav from '../src/components/top-nav';

import {shallow} from 'enzyme';

describe('Top Nav should render', () => {

  it('Top Nav smoke test', () =>{
    shallow(<TopNav />)
  })

  it('function should fire when passed as prop', () => {
    const fakeFunction = jest.fn();
    const wrapper = shallow(<TopNav onNewGame = {fakeFunction}/>)
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    })
    expect(fakeFunction).toHaveBeenCalledWith();
  })

})