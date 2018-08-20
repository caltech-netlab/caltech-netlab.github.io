import Component from '@ember/component';
import { isPresent } from '@ember/utils';

export default Component.extend({
  tagName: 'li',
  classNames: ['mb-2'],

  init() {
    this.set("uri", this.getBestUri());
    this._super(...arguments);
  },

  // Extracts the URI to minimize # of clicks for
  // getting the pdf
  getBestUri() {
    let documents = this.get("model.documents");

    if (isPresent(documents)) {
      for (let doc of documents) {
        if (doc.security === "public" && isPresent(doc.uri)) {
          return doc.uri;
        }
      }
    }

    let related = this.get("model.related_url");

    if (isPresent(related)) {
      for (let uri of related) {
        if (isPresent(uri.url)) {
          return uri.url;
        }
      }
    }

    return this.get("model.official_url");
  },

  uri: null
});
