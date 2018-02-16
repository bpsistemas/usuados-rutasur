'use strict';

define('usados-rutasur-ember/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/agencia-single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/agencia-single.js should pass ESLint\n\n');
  });

  QUnit.test('components/categoria-single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/categoria-single.js should pass ESLint\n\n');
  });

  QUnit.test('components/form-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/marca-single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/marca-single.js should pass ESLint\n\n');
  });

  QUnit.test('components/unidad-single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/unidad-single.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/agencias.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/agencias.js should pass ESLint\n\n5:9 - \'Ember\' is not defined. (no-undef)\n6:17 - \'transition\' is defined but never used. (no-unused-vars)\n7:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/categorias.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/categorias.js should pass ESLint\n\n5:9 - \'Ember\' is not defined. (no-undef)\n6:17 - \'transition\' is defined but never used. (no-unused-vars)\n7:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/listado.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/listado.js should pass ESLint\n\n');
  });

  QUnit.test('routes/marcas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/marcas.js should pass ESLint\n\n');
  });

  QUnit.test('routes/unidad.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/unidad.js should pass ESLint\n\n');
  });
});
define('usados-rutasur-ember/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('usados-rutasur-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'usados-rutasur-ember/tests/helpers/start-app', 'usados-rutasur-ember/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('usados-rutasur-ember/tests/helpers/resolver', ['exports', 'usados-rutasur-ember/resolver', 'usados-rutasur-ember/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('usados-rutasur-ember/tests/helpers/start-app', ['exports', 'usados-rutasur-ember/app', 'usados-rutasur-ember/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('usados-rutasur-ember/tests/integration/components/agencia-single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('agencia-single', 'Integration | Component | agencia single', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "RCj/KK2y",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"agencia-single\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XcOHQaA6",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"agencia-single\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('usados-rutasur-ember/tests/integration/components/categoria-single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('categoria-single', 'Integration | Component | categoria single', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "KuR479R+",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"categoria-single\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7Px1EpOA",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"categoria-single\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('usados-rutasur-ember/tests/integration/components/form-filter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('form-filter', 'Integration | Component | form filter', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+tTVV5ow",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"form-filter\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "c91aapU8",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"form-filter\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('usados-rutasur-ember/tests/integration/components/marca-single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('marca-single', 'Integration | Component | marca single', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "crJtG2dc",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"marca-single\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "F4yfXBRX",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"marca-single\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('usados-rutasur-ember/tests/integration/components/unidad-single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('unidad-single', 'Integration | Component | unidad single', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "FSz+ejCk",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"unidad-single\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "uXC/UE7j",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"unidad-single\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('usados-rutasur-ember/tests/test-helper', ['usados-rutasur-ember/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('usados-rutasur-ember/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/agencia-single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/agencia-single-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/categoria-single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/categoria-single-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/form-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/form-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/marca-single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/marca-single-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/unidad-single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/unidad-single-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/agencias-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/agencias-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/categorias-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/categorias-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/listado-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/listado-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/marcas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/marcas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/unidad-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/unidad-test.js should pass ESLint\n\n');
  });
});
define('usados-rutasur-ember/tests/unit/routes/agencias-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:agencias', 'Unit | Route | agencias', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('usados-rutasur-ember/tests/unit/routes/categorias-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:categorias', 'Unit | Route | categorias', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('usados-rutasur-ember/tests/unit/routes/listado-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:listado', 'Unit | Route | listado', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('usados-rutasur-ember/tests/unit/routes/marcas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:marcas', 'Unit | Route | marcas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('usados-rutasur-ember/tests/unit/routes/unidad-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:unidad', 'Unit | Route | unidad', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('usados-rutasur-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
