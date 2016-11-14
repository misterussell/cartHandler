import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem(item) {
    console.log('item added');
    this.get('items').push(item);
    this.calculateTotal();
  },
  removeItem(item) {
    console.log('item removed');
    let itemRemove = this.get('items').splice(location, 1);
    let items = this.get('items');
    this.calculateTotal();
  },
  calculateTotal() {
    let total = 0;
    //calculate from items in the model - not manually form another system of addition.
    this.get('items').forEach((item) => {
      total += item.price;
    });
    this.set({total});
    console.log(this.get('total'));
  }
});
