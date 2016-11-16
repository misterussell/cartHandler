import Backbone from 'backbone';
import {expect} from 'chai';
import sinon from 'sinon';

import Cart from '../../app/scripts/models/cart.js'

describe('cart model', () => {
  let spy = sinon.spy();
  let cart;

  beforeEach(() => {
    cart = new Cart();
    cart.on('change', spy);
  });

  // Baseline tests
  it('is a function', () => {
    expect(Cart).to.be.a('function');
  });

  it('is a Backbone model', () => {
    expect(cart).to.be.an.instanceof(Backbone.Model);
  });

  // Property tests
  it('has items property with default value === empty array', () => {
    expect(cart.get('items')).to.deep.equal([]);
  });

  it('has total property with default value === 0', () => {
    expect(cart.get('total')).to.deep.equal(0);
  });

  // Method tests
  it('has addItem method', () => {
    expect(cart).to.have.property('addItem');
    expect(cart.addItem).to.be.a('function');
  });

  it('has removeItem method', () => {
    expect(cart).to.have.property('removeItem');
    expect(cart.removeItem).to.be.a('function');
  });

  it('has calculateTotal method', () => {
    expect(cart).to.have.property('calculateTotal');
    expect(cart.calculateTotal).to.be.a('function');
  });

  // it('should update it\'s total property when calculateTotal is run', () => {
  //   let fn = cart.calculateTotal.bind(this);
  //   expect(fn).to.change(this, 'total');
  // });

  // Listener tests
  it('addItem method registers change event', () => {
    cart.addItem({
        id: 1,
        item: 'test',
        price: 10.00
      });
    expect(spy.callCount).to.equal(1);
  });

  it('removeItem method registers change event', () => {
    cart.removeItem(1);
    expect(spy.callCount).to.equal(1);
  });

  it('calculateTotal method registers change event', () => {
    cart.addItem({
        id: 1,
        item: 'test',
        price: 10.00
      });
    cart.calculateTotal();
    expect(spy.callCount).to.equal(2);
  });
});
