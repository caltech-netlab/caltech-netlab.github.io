import Ember from 'ember';

export default Ember.Controller.extend({

 publicationPager: Ember.inject.service(),

 queryParams:['page', 'limit'],

 page: Ember.computed.alias('publicationPager.page'),

 limit: Ember.computed.alias('publicationPager.limit'),

 actions: {
   nextPage: function() {
     this.get('publicationPager').nextPage();
   },
   previousPage: function() {
     this.get('publicationPager').previousPage();
   }
 }
});
