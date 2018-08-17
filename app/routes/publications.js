import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model() {
    return this.get('store').getPublications();
  },

  store: service()
});
