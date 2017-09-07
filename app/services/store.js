import Ember from 'ember';
import Highlight from 'netlab/models/highlight'

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

export default Ember.Service.extend({
  getHighlights() {
    return highlights;
  }
});
