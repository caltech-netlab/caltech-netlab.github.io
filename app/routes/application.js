import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    redirectTo: function(page) {
      this.transitionTo(page);
    }
  }
});
