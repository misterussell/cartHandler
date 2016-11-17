import Backbone from 'backbone';
import {expect} from 'chai';
import sinon from 'sinon';

import Cart from '../../app/scripts/models/cart.js'

describe('cart model', () => {
  // let spy = sinon.spy();
  let cart;
  let cleanCart;

  beforeEach(() => {
    cart = new Cart();
    // cart.on('change', () => {
    //   cleanCart = cart.toJSON();
    // });
    // console.log(cleanCart);
    // cart.on('change', spy);
    // console.log(cart);
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
  it('addItem method registers change event and updates the val of items', () => {
    let spy = sinon.spy(cart, 'addItem');
    cart.addItem({
        id: 1,
        item: 'test',
        price: 10.00
      });
    expect(spy.callCount).to.equal(1);
    expect(cart.attributes.items).to.deep.equal([{
        id: 1,
        item: 'test',
        price: 10.00
      }]);
  });

  // cart.should.trigger("change", {with: cart.items}).when(cart.addItem({
  //     id: 1,
  //     item: 'test',
  //     price: 10.00
  //   })
  // );

  // it('addItem method changes object value: items', () => {
  //   // expect(cart.addItem).to.change(cart.attributes, 'items');
  //   // expect(cart.addItem).to.change(cleanCart, 'items');
  //   // check to see if the property deep equals an exact thing
  //
  //   });

  it('removeItem method registers change event and updates the val of items', () => {
    let spy = sinon.spy(cart, 'removeItem');
    cart.addItem({
        id: 1,
        item: 'test',
        price: 10.00
      });
    cart.removeItem({
        id: 1,
        item: 'test',
        price: 10.00
      });
    expect(spy.callCount).to.equal(1);
    expect(cart.attributes.items).to.deep.equal([]);
  });

  it('calculateTotal method registers change event and updates the value of total', () => {
    let spy = sinon.spy(cart, 'calculateTotal');
    let item = {id: 2, item: 'test', price: 20};
    cart.addItem(item);
    console.log(cart.attributes);
    cart.addItem({
        id: 2,
        item: 'test',
        price: 20.00
      });
    cart.removeItem(item);
    // testing for 3 changes (2 add 1 remove)
    console.log(cart.attributes);
    expect(spy.callCount).to.equal(3);
    expect(cart.attributes.total).to.deep.equal(10);
  });
});
