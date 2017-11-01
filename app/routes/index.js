import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    if (this.get('store').getPublications().length == 0) {
      this.get('store').fetchPublicationsInLibrary();
    }
    return Ember.RSVP.hash({
      highlights: this.get('store').getHighlights(),
      publications: this.get('store').getRecentPublications()
    });
  },

  store: Ember.inject.service()
});
