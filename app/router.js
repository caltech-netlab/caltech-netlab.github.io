import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('research');
  this.route('people');
  this.route('publications');
  this.route('resources');
});

export default Router;
