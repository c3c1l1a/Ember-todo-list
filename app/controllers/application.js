import Ember from 'ember';

export default Ember.Controller.extend({
	todos: [],
	incompleteTodos: Ember.computed.filterBy('todos', 'isComplete', false),
	completeTodos: Ember.computed.filterBy('todos', 'isComplete', true),
	hasCompleted: Ember.computed.bool('completeTodos.length'),
	actions: {
		createTodo(content){
			this.get('todos').addObject(this.store.createRecord('todo', {label: content}));
		},
	}
});
