import Ember from 'ember';

export default Ember.Component.extend({
  toggleIcon: 'fa-plus',
  actions: {
    switchToggleIcon() {
      if (this.get('toggleIcon') === 'fa-plus') {
        this.set('toggleIcon', 'fa-minus')
      }
      else {
        this.set('toggleIcon', 'fa-plus')
      }
    }
  },
});
