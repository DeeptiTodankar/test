import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies');
  this.route('characters');
  this.route('entity-details',{path: ":id/entity-details"});
});

export default Router;
