import React from 'react';

import StoreItem from './storeItem';

export default React.createClass({
  render() {
    let storeItems = this.props.items.map((item, i) => {
      return <StoreItem key={item.id} item={item}/>;
    });
    return (
      <div className="store">
        <h1>Store Items</h1>
        <ul>
          {storeItems}
        </ul>
      </div>
    );
  }
});
