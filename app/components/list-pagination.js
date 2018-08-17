import { computed } from '@ember/object';
import { alias } from "@ember/object/computed";
import { inject as service } from '@ember/service';
import Component from '@ember/component';

const PAGINATION_SIZE = 45;

export default Component.extend({
  params: service('publication-pager'),

  tagName: "section",

  page: alias("params.page"),

  paginatedItems: computed('page', function() {
    let i = (+this.get('page') - 1) * PAGINATION_SIZE;
    let j = i + PAGINATION_SIZE;

    return this.get('items').slice(i, j);
  }),

  numberOfPages: computed('page', function() {
    let n = this.get('items.length');
    let r = Math.ceil(n / PAGINATION_SIZE);

    return r;
  }),

  pageNumbers: computed('numberOfPages', function() {
    let n = Array(this.get('numberOfPages'));

    for (let i = 0; i < n.length; i++) {
      n[i] = i + 1;
    }

    return n;
  }),

  showNext: computed('page', 'numberOfPages', function() {
    return (this.get('page') < this.get('numberOfPages'));
  }),

  showPrevious: computed('page', function() {
    return (this.get('page') > 1);
  }),

  nextText: 'Next',

  previousText: 'Previous',

  actions: {
    nextClicked() {
      if (this.get('page') + 1 <= this.get('numberOfPages')) {
        this.get('params').nextPage();
      }
    },

    previousClicked() {
      if (this.get('page') > 0) {
        this.get('params').previousPage();
      }
    },

    pageClicked(pageNumber) {
      this.get("params").goToPage(pageNumber);
    }
  }
});
