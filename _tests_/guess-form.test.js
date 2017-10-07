import React from 'react';
import GuessForm from '../src/components/guess-form';
import { shallow, mount } from 'enzyme';

describe('Rendering Guess form', () => {
  it('should render',() => {
    shallow(<GuessForm />)
  })

  it('Guess should be submitted', ()=> {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback}/>);
    const form = wrapper.find('form');
    const value = 23;
    wrapper.find('#userGuess').node.value=value;
    form.simulate('submit', {
      preventDefault() {}
    })
    //expect(callback).toHaveBeenCalledWith(value.toString());
    expect(callback).toHaveBeenCalled();
  })
})