import Ember from 'ember';

export default Ember.Service.extend({
    page: 1,
    limit: 4,
    nextPage: function() {
        this.incrementProperty('page');
    },
    previousPage: function() {
        this.decrementProperty('page');
    }
});
