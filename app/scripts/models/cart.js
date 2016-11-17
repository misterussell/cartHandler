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
  removeItem(item) {
    // console.log('Item removed.');
    // let newArr = this.get('items').slice(location, 1);
    // item.price = (item.price * -1);
    console.log(item);
    this.set({items: newArr, total: this.calculateTotal()});
  },
  calculateTotal(newItem) {
    // let newTotal = 0;
    let priorTotal = this.get('total');

    let total = priorTotal + newItem.price;

    // console.log('Total updated.');
    // this.get('items').forEach((item) => {
    //   newTotal += item.price;
    // });
    return total;
  },
});
