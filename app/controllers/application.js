import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTodo(content){
			this.store.createRecord('todo', {label: content})
		}

	}
});
