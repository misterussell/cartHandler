import React from 'react';
import Backbone from 'backbone';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';

import Buttons from '../../app/scripts/components/buttons.js';


describe('Buttons component', () => {
  let buttons, add, remove;

  beforeEach(() => {
    add = sinon.spy();
    remove = sinon.spy();
    buttons = shallow(<Buttons add={add} remove={remove} />);
  });

  it('should render a div', () => {
    expect(buttons.is('div')).to.be.true
  });

  it('should output add and remove buttons if an add and remove prop are passed in', () => {
    expect(buttons.contains(<button className="add">Add</button>)).to.equal.true;
    expect(buttons.contains(<button className="remove">Remove</button>)).to.equal.true;
  });

  it('if no add prop is passed in, only a remove button should output', () => {
    buttons.setProps({add: null});
    expect(buttons.contains(<button className="remove">Remove</button>)).to.equal.true;
    expect(buttons.contains(<button className="add">Add</button>)).to.equal.false;
  });

  it('if no remove prop is passed in, only an add button should output', () => {
    buttons.setProps({remove: null});
    expect(buttons.contains(<button className="add">Add</button>)).to.equal.true;
    expect(buttons.contains(<button className="remove">Remove</button>)).to.equal.false;
  });

  it('should have a handleAdd method', () => {
    expect(buttons.instance().handleAdd).to.be.a('function');
  });

  it('handleAdd should be triggered on a click event on the Add Button', () => {
    // console.log(buttons.debug());
    // buttons.find('.add').simulate('click');
    buttons.find('.add').simulate('click', { preventDefault() {} });
    expect(add.callCount).to.equal(1);
  });

  it('should have a handleRemove method', () => {
    expect(buttons.instance().handleRemove).to.be.a('function');
  });

  it('handleRemove should be triggered on a click event on the Remove Button', () => {
    buttons.find('.remove').simulate('click', { preventDefault() {} });
    expect(remove.callCount).to.equal(1);
  });
});
