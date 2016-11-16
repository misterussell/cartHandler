import React, { PropTypes } from 'react';
import isRequiredIf from 'react-proptype-conditional-require';

import Buttons from './buttons';

import store from '../store';

// Require If investigation
// const {obj, number} = PropTypes;
//
// Component.LABEL_CLASSNAME_ERROR_MESSAGE = '';
//
// Component.propTypes = {
//   item: isRequiredIf(obj, true)
//   item.loc: isRequiredIf(number, true, )
// }

export default React.createClass({
  render() {
    return (
      <li>
        <h2 className="title">{this.props.item.item}</h2>
        <h3 className="price">{this.props.item.price}</h3>
        <Buttons add={this.addAdditional} remove={this.removeFromCart}/>
      </li>
    );
  },
  addAdditional() {
    store.cart.addItem(this.props.item);
  },
  removeFromCart() {
    // console.log(this.props.location);
    store.cart.removeItem(this.props.loc);
  }
});
