import React from 'react';

export default React.createClass({
  render() {
    return (
      <li>
        <h2>{this.props.item.item}</h2>
        <h3>{this.props.item.price}</h3>
      </li>
    );
  }
});
