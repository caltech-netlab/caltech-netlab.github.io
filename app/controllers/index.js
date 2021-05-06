import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

const RECENT_LIMIT = 6;

function highlightFilter(pub) {
  let publisher = pub.publication || "";

  return publisher.toLowerCase().match(/journal|transaction/);
}

export default Controller.extend({
  publications: service(),
  recent: computed("publications.publications.[]", function() {
    return this.get("publications.publications").filter(highlightFilter).slice(0, RECENT_LIMIT);
  })
});

