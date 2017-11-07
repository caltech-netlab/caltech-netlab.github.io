import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['custom', 'my-3'],
  hasPublications: false,

  showPublication: Ember.on('didInsertElement', function() {
    const store = this.get('store')
    let publications = this
    if (this.get('store').getPublications().length == 0) {
      this.get('store').fetchPublicationsInLibrary().done(function() {
        if (publications.isDestroyed) {
          return;
        }
        publications.set('hasPublications', true);
      });
    }
    else {
      if (publications.isDestroyed) {
        return;
      }
      publications.set('hasPublications', true);
    }
  }),

  store: Ember.inject.service()
});
