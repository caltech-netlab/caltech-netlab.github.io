import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model() {
    return this.get('store').getPublications();
  },

  store: Ember.inject.service()
});
