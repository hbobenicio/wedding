import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-jumbotron', 'Integration | Component | page jumbotron', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{page-jumbotron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#page-jumbotron}}
      template block text
    {{/page-jumbotron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
