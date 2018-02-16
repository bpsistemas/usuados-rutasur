import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('unidad',{ path: '/unidad/:id'});
  this.route('marcas',{ path: '/marcas/:id'});
  this.route('agencias',{ path: '/agencias/:id'});
  this.route('categorias',{ path: '/categorias/:id'});
  this.route('listado');
});

export default Router;
