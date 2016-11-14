import React from 'react';

export default React.createClass({
  render() {
    let addButton;
    let removeButton;
    if (this.props.add) {
      addButton = <button type="button" className="add" onClick={this.handleAdd}>Add</button>;
    } else addButton = '';
    if (this.props.remove) {
      removeButton = <button type="button" className="remove" onClick={this.handleRemove}>Remove</button>;
    } else removeButton = '';
    return (
      <div className="clickhandlers">
        {addButton}
        {removeButton}
      </div>
    );
  },
  handleAdd(e) {
    e.preventDefault();
    this.props.add();
  },
  handleRemove(e) {
    e.preventDefault();
    this.props.remove();
  }
});
