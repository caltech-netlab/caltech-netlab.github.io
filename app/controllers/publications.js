import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  publicationPager: service(),

  queryParams: ['page'],

  page: alias('publicationPager.page'),

  actions: {
    nextPage() {
      this.get('publicationPager').nextPage();
    },
    previousPage() {
      this.get('publicationPager').previousPage();
    }
  }
});
