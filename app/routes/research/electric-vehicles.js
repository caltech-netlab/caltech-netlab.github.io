import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';

export default Route.extend({
  actions: {
    didTransition() {
      schedule('afterRender', () => {
        window.lightGallery(document.getElementById('deployment-gallery'), {
          selector: 'a',
          subHtmlSelectorRelative: true
        });
      });
    }
  }
});
