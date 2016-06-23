import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(), 
	isComplete: DS.attr({defaultValue: false})
});
