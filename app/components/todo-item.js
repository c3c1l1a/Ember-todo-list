import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['isCompleted:completed', 'isEditing:editing'],
	actions: {
		toggleComplete () {
			this.toggleProperty('isCompleted');
		},
		editTodo(){
			this.set('isEditing', true);
		}, 
		doneEditing(){
			this.set('isEditing', false);
		}
	} 
});
