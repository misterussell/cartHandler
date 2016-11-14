import React from 'react';

import cartItem from './cartItem';

export default React.createClass({
  render() {
    let cartItems;
    if (this.props.cartItems.items.length < 1) {
      cartItems = <li>No items yet</li> ;
    } else {
      cartItems = this.props.cartItems.map((item) => {
        return <li>item to go here</li>;
      });
    }
    return (
      <div className="cart">
        <h1>Cart</h1>
        <ul>
          {cartItems}
        </ul>
        <h4>Total</h4>
      </div>
    );
  }
});
