import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sponsor-thumbnail', 'Integration | Component | sponsor thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sponsor-thumbnail}}
      template block text
    {{/sponsor-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
