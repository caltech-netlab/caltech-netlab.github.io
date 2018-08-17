import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  hasPublications: false,

  didInsertElement() {
    this.showPublication();
    this._super(...arguments);
  },

  showPublication() {
    const store = this.get('store');
    let publications = this;

    if (store.getPublications().length === 0) {
      store.fetchPublicationsInLibrary().done(function() {
        publications.set('hasPublications', true);
      });
    } else {
      publications.set('hasPublications', true);
    }
  },

  store: service()
});
