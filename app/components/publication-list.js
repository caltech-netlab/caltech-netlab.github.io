import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['custom', 'my-3'],
  hasPublications: false,

  didInsertElement() {
    this.showPublication();
    this._super(...arguments);
  },

  showPublication() {
    const store = this.get('store')
    let publications = this

    if (store.getPublications().length === 0) {
      store.fetchPublicationsInLibrary().done(function() {
        if (publications.isDestroyed) {
          return;
        }
        publications.set('hasPublications', true);
      });
    } else {
      if (publications.isDestroyed) {
        return;
      }
      publications.set('hasPublications', true);
    }
  },

  store: service()
});
