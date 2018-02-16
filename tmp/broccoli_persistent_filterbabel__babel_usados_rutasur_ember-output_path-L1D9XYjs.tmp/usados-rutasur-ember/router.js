define('usados-rutasur-ember/router', ['exports', 'usados-rutasur-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('unidad', { path: '/unidad/:id' });
    this.route('marcas', { path: '/marcas/:id' });
    this.route('agencias', { path: '/agencias/:id' });
    this.route('categorias', { path: '/categorias/:id' });
    this.route('listado');
  });

  exports.default = Router;
});