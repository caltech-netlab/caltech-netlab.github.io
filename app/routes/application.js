import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectTo: function(page) {
      this.transitionTo(page);
    }
  }
});
