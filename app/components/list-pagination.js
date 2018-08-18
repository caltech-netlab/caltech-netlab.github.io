import { computed } from '@ember/object';
import { alias } from "@ember/object/computed";
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  publications: service('publications'),

  tagName: "section",

  page: alias("publications.page"),
  paginateBy: 10,

  numberOfPages: computed('page', 'total', function() {
    let n = this.get('total');
    let r = Math.ceil(n / this.get("paginateBy"));

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
        this.get('publications').nextPage();
      }
    },

    previousClicked() {
      if (this.get('page') > 0) {
        this.get('publications').previousPage();
      }
    },

    pageClicked(pageNumber) {
      this.get("publications").goToPage(pageNumber);
    }
  }
});
