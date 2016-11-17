import React from 'react';

import CartList from '../cartList';
import StoreList from '../storeList';

import store from '../../store';

export default React.createClass({
  getInitialState() {
    return {
      cart: store.cart.toJSON()
    };
  },
  componentDidMount() {
    store.cart.on('change', () => {
    // store.cart.on('change change:[items]', () => {
      this.setState({cart: store.cart.toJSON()});
    });
  },
  render() {
    return (
      <div>
        <CartList cart={this.state.cart} />
        <StoreList items={store.storeData} />
      </div>
    );
  }
});
