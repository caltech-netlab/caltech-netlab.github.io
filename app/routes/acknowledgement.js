import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return Ember.RSVP.hash({
    //   activeSponsors: this.get('store').getHighlights(),
    //   publications: this.get('store').getRecentPublications()
    // });
    return this.get('store').getSponsors();
  },

  store: Ember.inject.service()
});
