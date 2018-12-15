import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

const RECENT_LIMIT = 4;

export default Controller.extend({
  publications: service(),
  recent: computed("publications.publications.[]", function() {
    return this.get("publications.publications").slice(0, RECENT_LIMIT);
  })
});
