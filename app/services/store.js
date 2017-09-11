import Ember from 'ember';
import Highlight from 'netlab/models/highlight'
import Publication from 'netlab/models/publication'

const highlights = [];

let highlight = Highlight.create({
  id: '1',
  title: 'A network of intelligent DER',
  content: Ember.String.htmlSafe('<ul><li>2014-09-18 - <a href="https://rigorandrelevance.wordpress.com/2014/09/18/a-network-of-intelligent-der/">rigor+relevance</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '2',
  title: 'Communication and power networks: Architecture',
  content: Ember.String.htmlSafe('<ul><li>2013-11-26 - <a href="https://rigorandrelevance.wordpress.com/2013/11/26/power-network-and-internet-i-architecture/">Part I</a></li><li>2013-12-02 - <a href="https://rigorandrelevance.wordpress.com/2013/12/02/communication-and-power-networks-architecture-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '3',
  title: 'Communication and power networks: Flow optimization',
  content: Ember.String.htmlSafe('<ul><li>2014-05-05 - <a href=""https://rigorandrelevance.wordpress.com/2014/05/05/communication-and-power-networks-flow-optimization-part-i/">Part I</a></li><li>2014-05-19 - <a href="https://rigorandrelevance.wordpress.com/2014/05/19/communication-and-power-networks-flow-optimization-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '4',
  title: 'Communication and power networks: Forward engineering',
  content: Ember.String.htmlSafe('<ul><li>2014-07-08 - <a href="https://rigorandrelevance.wordpress.com/2014/07/08/communication-and-power-networks-reverse-and-forward-engineering-part-i/">Part I</a></li><li>2014-07-15 - <a href="https://rigorandrelevance.wordpress.com/2014/07/15/communication-and-power-networks-reverse-and-forward-engineering-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '4',
  title: 'Business case of DER and utility',
  content: Ember.String.htmlSafe('<ul><li>2014-12-02 - <a href="https://rigorandrelevance.wordpress.com/2014/12/02/business-case-for-der-and-utility/">rigor+relevance</a></li></ul>')
});
highlights.pushObject(highlight);

const publications = [];
const recentPublications = [];

export default Ember.Service.extend({

  getHighlights() {
    return highlights;
  },

  fetchPublicationsInLibrary() {
    return Ember.$.getJSON("http://authors.library.caltech.edu/cgi/exportview/person-az/Low-S-H/JSON/Low-S-H.js", function(data) {
      // let arr = data.slice(0, 10);
      publications.clear();
      let recentLimit = 5;
      let recentCount = 0;
      Ember.$(data).each(function() {
        // console.log(this);
        // publications.pushObject(this);
        let pub = Publication.create({
          id: this.eprintid,
          title: this.title,
          book_title: this.book_title,
          event_title: this.event_title,
          creators: this.creators,
          isbn: this.isbn,
          ispublished: this.ispublished,
          issn: this.issn,
          date: this.date,
          pagerange: this.pagerange,
          datestamp: this.datestamp,
          place_of_pub: this.place_of_pub,
          publication: this.publication,
          publisher: this.publisher,
          official_url: this.official_url,
          volume: this.volume,
          number: this.number
        });
        if (recentCount < recentLimit) {
          recentPublications.pushObject(pub);
          recentCount = recentCount + 1;
        }
        publications.pushObject(pub);
      });

      // console.log(publications);
    });
  },

  getPublications() {
    return publications;
  },

  getRecentPublications() {
    return recentPublications;
  }
});
