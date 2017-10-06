import React from 'react';
import GuessList from '../src/components/guess-list';

import {shallow} from 'enzyme';

describe('Guess List should render', () => {

  it('Guess List smoke test', () =>{
    shallow(<GuessList guesses={[]} />)
  })

})