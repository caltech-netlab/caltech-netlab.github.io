import { computed } from '@ember/object';
import { bind } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import $ from 'jquery';
import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';

const RECENT_LIMIT = 5;

export default Service.extend({
  init() {
    this.recoverFromLocalStorage();

    if (isPresent(this.get("publications"))) {
      this.set("loaded", true);
    }

    // Ensure the pubs are updated
    this.fetchPublicationsInLibrary();
    this._super(...arguments);
  },

  page: 1,

  cachedPubs: storageFor("publications"),

  nextPage() {
    this.incrementProperty('page');
  },

  previousPage() {
    this.decrementProperty('page');
  },

  goToPage(page) {
    this.set("page", page);
  },

  publications: null,
  loaded: false,

  recentPublications: computed("publications.[]", function() {
    return this.get("publications").slice(0, RECENT_LIMIT);
  }),

  persistToLocalStorage() {
    this.set("cachedPubs.cache", this.get("publications"));
  },

  recoverFromLocalStorage() {
    this.set("publications", this.get("cachedPubs.cache") || []);
  },

  // Need to use JSONP inorder to get pass the cross-origin error
  fetchPublicationsInLibrary() {
    let self = this;

    return $.getJSON("http://authors.library.caltech.edu/cgi/exportview/person-az/Low-S-H/JSON/Low-S-H.js?callback=?", entries => {
      let pubs = [];

      entries.forEach(entry => {
        let pub = {
          id: entry.eprintid,
          title: entry.title,
          book_title: entry.book_title,
          event_title: entry.event_title,
          creators: entry.creators,
          isbn: entry.isbn,
          ispublished: entry.ispublished,
          issn: entry.issn,
          date: entry.date,
          pagerange: entry.pagerange,
          datestamp: entry.datestamp,
          place_of_pub: entry.place_of_pub,
          publication: entry.publication,
          publisher: entry.publisher,
          official_url: entry.official_url,
          volume: entry.volume,
          number: entry.number
        };

        pubs.push(pub);
      });

      self.set("publications", pubs);
      self.set("loaded", true);
      self.persistToLocalStorage();
    }).fail(bind(this, () => {
      console.warn("Failed to fetch latest publication info");
    }));
  }
});
