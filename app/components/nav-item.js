import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagName: 'li',
  classNames: 'nav-item',

  mouseEnter() {
    let menu = $('li#'+this.elementId+'.nav-item > ul.sub-nav');

    if (menu.is(':hidden') && $('.navbar-toggler').is(':hidden')) {
      menu.css( "visibility", "visible" ).slideDown();
      $('#navbarToggler').removeClass('show');
    }
  },

  mouseLeave() {
    let menu = $("li#"+this.elementId+".nav-item > ul.sub-nav");

    if (menu.not(':hidden') && $('.navbar-toggler').is(':hidden')) {
      menu.slideUp();
      $('#navbarToggler').removeClass('show');
    }
  }
});
