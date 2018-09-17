import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    showSubMenus() {
      $('.navbar .sub-nav').show();
    }
  }
});
