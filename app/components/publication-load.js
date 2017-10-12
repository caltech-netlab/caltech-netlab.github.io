import Ember from 'ember';

export default Ember.Component.extend({
  hasPublications: false,

  showPublication: Ember.on('didInsertElement', function() {
    const store = this.get('store')
    let publications = this
    store.fetchPublicationsInLibrary().done(function() {
      publications.set('hasPublications', true);
    });
  }),

  store: Ember.inject.service()
});
