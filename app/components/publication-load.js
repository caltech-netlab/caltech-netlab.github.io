import Ember from 'ember';

export default Ember.Component.extend({
  hasPublications: false,

  showPublication: Ember.on('didInsertElement', function() {
    const store = this.get('store')
    let publications = this
    if (this.get('store').getPublications().length == 0) {
      this.get('store').fetchPublicationsInLibrary().done(function() {
        publications.set('hasPublications', true);
      });
    }
    else {
      publications.set('hasPublications', true);
    }
  }),

  store: Ember.inject.service()
});
