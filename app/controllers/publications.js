import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  publications: service(),
  queryParams: ['page', 'limit'],
  limit: 50,
  page: alias('publications.page'),

  paginatedItems: computed('page', 'publications.publications.[]', function() {
    let i = (+this.get('page') - 1) * this.get("limit");
    let j = i + this.get("limit");

    return this.get('publications.publications').slice(i, j);
  })
});
