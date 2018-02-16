define('usados-rutasur-ember/routes/agencias', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    ajax: Ember.inject.service(),
    model: function model(params, transition) {
      console.log(params.nasa_id);
      return this.get('ajax').request('https://images-api.nasa.gov/search?media_type=image&nasa_id=' + params.nasa_id);
    }
  });
});