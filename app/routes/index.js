import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){ // the hook gets executed before rendering the index page.
        this.replaceWith('rentals');
    }
});
