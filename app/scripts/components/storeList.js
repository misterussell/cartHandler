import React from 'react';

import StoreItem from './storeItem';

export default React.createClass({
  render() {
    let storeItems = this.props.items.map((item) => {
      return <StoreItem key={item.id} item={item} />;
    });
    return (
      <ul className="store">
        {storeItems}
      </ul>
    );
  }
});
