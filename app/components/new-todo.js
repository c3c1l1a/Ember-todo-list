import Ember from 'ember';

export default Ember.TextField.extend({
	classNames: 'new-todo', 

	keyDown(e) {
		if (e.keyCode === 13){
			this.trigger('createTodo', this.get('value'));
			this.set('value', '');
		}
	}
});
