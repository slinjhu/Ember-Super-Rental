import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about'); // run "app/routes/about.js" when one visits URL "/about"
  this.route('contact');
  this.route('rentals');
});

export default Router;
