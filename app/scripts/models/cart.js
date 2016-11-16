import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem(item) {
    // console.log('Item added.');
    let items = this.get('items');
    let updatedItems = items.concat([item]);
    this.set({items: updatedItems, total: this.calculateTotal(item)});
    // this.calculateTotal();
  },
  removeItem(location) {
    // console.log('Item removed.');
    let newArr = this.get('items').slice(location, 1);
    this.set({items: newArr, total: this.calculateTotal()});
  },
  calculateTotal() {
    let newTotal = 0;
    console.log('Total updated.');
    this.get('items').forEach((item) => {
      newTotal += item.price;
    });
    // this.set({total: newTotal});
    return newTotal;
  },
  // setProperty()
});
