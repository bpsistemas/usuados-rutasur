define('usados-rutasur-ember/routes/categorias', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    ajax: Ember.inject.service(),
    model: function model(params, transition) {
      console.log(params.nasa_id);
      return this.get('ajax').request('http://api.usados.rutasurtrucks.com.ar/categorias');
    }
  });
});