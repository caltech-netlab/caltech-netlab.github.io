import Ember from 'ember';

export default Ember.Service.extend({
 page: 1,
 limit: 4,
 nextPage: function() {
    this.set('page',this.get('page') + 1);
    // console.log('Service: '+this.get('page'));
  },
  previousPage: function() {
    this.set('page',this.get('page') - 1);
    // console.log('Service: '+this.get('page'));
  }
});
