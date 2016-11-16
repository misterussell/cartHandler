import React from 'react';
import Backbone from 'backbone';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react'

import Buttons from '../../app/scripts/components/buttons.js';


describe('Buttons component', () => {
  let buttons, add, remove;

  beforeEach(() => {
    buttons = shallow(<Buttons add={add} remove={remove} />);
  });

  it('should render a div', () => {
    expect(buttons.is('div')).to.be.true

  });
});
