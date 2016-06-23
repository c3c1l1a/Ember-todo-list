import DS from 'ember-data';

export default DS.Model.extend({
  label: attr(),
  isComplete: attr()
});
