import React from 'react';
import Backbone from 'backbone';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react'

import CartItem from '../../app/scripts/components/cartItem.js';
import Buttons from '../../app/scripts/components/buttons.js';

describe('CartItem component', () => {
  let test, listItem, spy, buttons;

  test = {
        id: 1,
        item: 'test',
        price: 10.00
  };

  beforeEach(() => {
    listItem = shallow(<CartItem key={1} item={test} location={1}/>);
  });

  it('should be an li', () => {
    expect(listItem.is('li')).to.equal.true;
  });

  it('should have props when item is passed in', () => {
    expect(listItem.props).to.exist;
  });

  // Below will need to implement a require props lib
  // it('should not have props when no items are passed in', () => {
  //   listItem.setProps({item: undefined});
  //   // expect(item.props).to.not.exist;
  // });

  it('item should contain headers displaying the item\'s name and price', () => {
    expect(listItem.find('.title').text()).to.equal('test');
    expect(listItem.contains(<h2 className="title">test</h2>)).to.equal(true);
    expect(listItem.find('.price').text()).to.equal('10')
  });

  it('should contain a jsx element of buttons', () => {
    expect(listItem.contains(<Buttons />));
  });

  it('should have an addAdditional method', () => {
    expect(listItem.instance().addAdditional).to.be.a('function');
  });

  it('should have a removeFromCart method', () => {
    expect(listItem.instance().removeFromCart).to.be.a('function');
  });

  it('should register a click event when child is clicked', () => {
    spy = sinon.spy(listItem, 'addAdditional');
    listItem.find(Buttons).last().simulate('click');
    expect(spy.callCount).to.equal(1);
  });
});
