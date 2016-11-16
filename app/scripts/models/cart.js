import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem(item) {
    console.log('Item added.');
    let items = this.get('items');
    let updatedItems = items.concat([item]);
    this.set({items: updatedItems});
    this.calculateTotal();
  },
  removeItem(location) {
    console.log('Item removed.');
    this.get('items').splice(location, 1);
    this.calculateTotal();
  },
  calculateTotal() {
    let total = 0;
    console.log('Total updated.');
    this.get('items').forEach((item) => {
      total += item.price;
    });
    this.set({total});
  },
  // setProperty()
});
