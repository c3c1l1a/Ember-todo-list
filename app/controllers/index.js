import Ember from 'ember';

export default Ember.Controller.extend({
	application: Ember.inject.controller('application'),
	todos: Ember.computed.alias('application.todos'),
	actions: {
		destroyTodo(todo){
			this.get('todos').removeObject(todo);	
			todo.deleteRecord();
		},
		clearCompleted(){
			this.get('todos').filterBy('isComplete', true).forEach((todo) =>	{
				this.get('todos').removeObject(todo);
					todo.deleteRecord();
			});
		},  
	}
});
