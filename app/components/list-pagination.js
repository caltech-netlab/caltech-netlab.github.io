import Ember from 'ember';

export default Ember.Component.extend({
  params: Ember.inject.service('publication-pager'),
  tagName: "section",
  page: Ember.computed(function() {
    return this.get('params.page');
  }),
  paginateBy: 10,
  paginatedItems: Ember.computed('amenities', 'page', function(){
    var i = (parseInt(this.get('page')) - 1) * parseInt(this.get('paginateBy'));
    var j = i + parseInt(this.get('paginateBy'));
    return this.get('items').slice(i, j);
  }),
  numberOfPages: Ember.computed('page', function(){
    var n = this.get('items.length');
    var c = parseInt(this.get('paginateBy'));
    var r = Math.floor(n/c);
    if(n % c > 0) {
      r += 1;
    }
    return r;
  }),
  pageNumbers: Ember.computed('numberOfPages', function(){
    var n = Array(this.get('numberOfPages'));
    for(var i = 0;i < n.length;i++) {
      n[i] = i + 1;
    }
    return n;
  }),
  showNext: Ember.computed('page', function(){
    return (this.get('page') < this.get('numberOfPages'));
  }),
  showPrevious: Ember.computed('page', function(){
    return (this.get('page') > 1);
  }),
  nextText: 'Next',
  previousText: 'Previous',
  actions: {
    nextClicked() {
      if(this.get('page') + 1 <= this.get('numberOfPages')) {
        this.set('page', this.get('page') + 1);
      }
      this.get('params').nextPage();
      // console.log('component: '+this.get('params.page'));
    },
    previousClicked() {
      if(this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
      this.get('params').previousPage();
      // console.log('component: '+this.get('params.page'));
    },
    pageClicked(pageNumber){
      this.set('page', pageNumber);
      this.set('params.page', pageNumber);
    },
    checkPageNumber() {
      return this.get('page');
    }
  }
});
