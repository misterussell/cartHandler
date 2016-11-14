import React from 'react';

import Buttons from './buttons';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <li>
        <h2>{this.props.item.item}</h2>
        <h3>{this.props.item.price}</h3>
        <Buttons add={this.addToCart}  />
      </li>
    );
  },
  addToCart() {
    store.cart.addItem(this.props.item);
  }
});
