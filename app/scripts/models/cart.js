import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem() {
    
  },
  removeItem() {

  },
  calculateTotal() {
    //calculate from items in the model - not manually form another system of addition.
  }
});
