import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';
import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

const highlights = [{
  id: '1',
  title: 'A network of intelligent DER',
  content: htmlSafe('<ul><li>2014-09-18 - <a href="https://rigorandrelevance.wordpress.com/2014/09/18/a-network-of-intelligent-der/">rigor+relevance</a></li></ul>')
}, {
  id: '2',
  title: 'Communication and power networks: Architecture',
  content: htmlSafe('<ul><li>2013-11-26 - <a href="https://rigorandrelevance.wordpress.com/2013/11/26/power-network-and-internet-i-architecture/">Part I</a></li><li>2013-12-02 - <a href="https://rigorandrelevance.wordpress.com/2013/12/02/communication-and-power-networks-architecture-part-ii/">Part II</a></li></ul>')
}, {
  id: '3',
  title: 'Communication and power networks: Flow optimization',
  content: htmlSafe('<ul><li>2014-05-05 - <a href=""https://rigorandrelevance.wordpress.com/2014/05/05/communication-and-power-networks-flow-optimization-part-i/">Part I</a></li><li>2014-05-19 - <a href="https://rigorandrelevance.wordpress.com/2014/05/19/communication-and-power-networks-flow-optimization-part-ii/">Part II</a></li></ul>')
}, {
  id: '4',
  title: 'Business case of DER and utility',
  content: htmlSafe('<ul><li>2014-12-02 - <a href="https://rigorandrelevance.wordpress.com/2014/12/02/business-case-for-der-and-utility/">rigor+relevance</a></li></ul>')
}];

export default Controller.extend({
  publications: service(),
  recent: alias("publications.recentPublications"),
  highlights: highlights
});
