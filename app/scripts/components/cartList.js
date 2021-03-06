import React from 'react';

import CartItem from './cartItem';

export default React.createClass({
  render() {
    let cart;
    if (this.props.cart.items.length < 1) {
      cart = <li>No items in cart</li>;
    } else {
      cart = this.props.cart.items.map((item, i) => {
        return <CartItem key={i} item={item} loc={i}/>;
      });
    }
    return (
      <div className="cart">
        <h1>Cart Blanche</h1>
        <ul>
          {cart}
        </ul>
        <h4>Total: ${this.props.cart.total}</h4>
      </div>
    );
  }
});
