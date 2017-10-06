import React from 'react';
import Game from '../src/components/game';

import {shallow} from 'enzyme';

describe('<Game /> component', () => {
  it('Should render', () => {
    shallow(<Game />)
  })

  it('Guesses should be empty array', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('guesses')).toEqual([]);
  })

  it('Feedback should be Make your guess', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  })

  it('Correct number should be >=1', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
  })

  it('Correct number should be <=100', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('correctAnswer')).toBeLessThan(101);
  })

  it('Correct number should be a number', () => {
    const wrapper = shallow(<Game />);
    expect(isNaN(wrapper.state('correctAnswer'))).toEqual(false);
  })

  it('Feedback should start with You', () => {
    const wrapper = shallow(<Game />);   
    wrapper.instance().guess(50) 
    expect(wrapper.state('feedback').charAt(0)).toEqual('Y');
  })

})
