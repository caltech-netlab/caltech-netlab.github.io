import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      highlights: this.get('store').getHighlights(),
      publications: this.get('store').getRecentPublications()
    });
  },

  store: Ember.inject.service()
});
