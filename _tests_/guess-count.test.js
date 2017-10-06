import React from 'react';
import GuessCount from '../src/components/guess-count';

import {shallow} from 'enzyme';

describe('GuessCount should render', () => {

  it('Guess Count should be a number', () => {
    const count = 3;
    const wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.contains(<p>
      Guess #<span id="count">{count}</span>!
  </p>))
  })

})