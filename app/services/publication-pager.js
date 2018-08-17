import Service from '@ember/service';

export default Service.extend({
  page: 1,
  limit: 4,

  nextPage() {
    this.incrementProperty('page');
  },

  previousPage() {
    this.decrementProperty('page');
  },

  goToPage(page) {
    this.set("page", page);
  }
});
