import Component from '@ember/component';

export default Component.extend({
  toggleIcon: 'fa-plus',

  actions: {
    switchToggleIcon() {
      if (this.get('toggleIcon') === 'fa-plus') {
        this.set('toggleIcon', 'fa-minus')
      } else {
        this.set('toggleIcon', 'fa-plus')
      }
    }
  }
});
