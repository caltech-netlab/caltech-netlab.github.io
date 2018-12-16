import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

const RECENT_LIMIT = 6;

export default Controller.extend({
  publications: service(),
  recent: computed("publications.publications.[]", function() {
    return this.get("publications.publications").slice(0, RECENT_LIMIT);
  })
});
