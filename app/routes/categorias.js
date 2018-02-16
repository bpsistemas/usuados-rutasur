import Route from '@ember/routing/route';

export default Route.extend({

  ajax: Ember.inject.service(),
  model(params, transition){
      console.log(params.nasa_id);
      return this.get('ajax').request('http://api.usados.rutasurtrucks.com.ar/categorias');
  }

});
