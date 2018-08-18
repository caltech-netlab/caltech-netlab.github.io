import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['custom', 'my-3'],
  publications: service()
});
