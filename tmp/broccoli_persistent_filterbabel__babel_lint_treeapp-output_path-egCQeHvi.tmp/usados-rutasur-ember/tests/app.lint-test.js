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