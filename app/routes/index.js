import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    if (this.get('store').getPublications().length === 0) {
      this.get('store').fetchPublicationsInLibrary();
    }

    return hash({
      highlights: this.get('store').getHighlights(),
      publications: this.get('store').getRecentPublications()
    });
  },

  store: service()
});
