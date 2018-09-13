import Component from '@ember/component';

export default Component.extend({
  actions: {
    showSubMenus() {
      $('.navbar .sub-nav').show();
    }
  }
});
