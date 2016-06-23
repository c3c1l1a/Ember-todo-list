####Ember tutorial
#####Starting an application
```ember new todoList```

#####Remember to do some updates 
In the ```bower.json``` file change the version numbers of ```ember``` and ```ember-data``` to the current version. Then do ```bower install```

#####Starting the development server
```ember serve```

#####Create a component for the todo-list
``` ember generate component new-todo```

#####Get the template for the todolist
Doing a simple  ```bower search todo``` will give you a few options one of them being ```todomvc-app-css```. Now install the template with  ```bower install todomvc-app-css```

####Include the template in the project
To include third party applications into the project open ```ember-cli-build.js``` and add ```app.import("bower_components/todomvc-app-css/index.css"); ```. Now the while file should be like 

```
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("bower_components/todomvc-app-css/index.css");

  return app.toTree();
};
```
####Get the basic html for the template
You should paste the html in ```app/templates/application.hbs```. 
You should also add the text field component

```
<section class="todoapp">
	<header class="header">
		<h1>todos</h1>
		{{new-todo placeholder="What needs to be done?" autofocus="true" 	}}
	</header>
	<section class="main">
		<input class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
	</section>
	<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>0</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
	</footer>
</section>
<footer class="info">
	<p>Double-click to edit a todo</p>
	<!-- Remove the below line ↓ -->
	<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
	<!-- Change this out with your name and url ↓ -->
	<p>Created by <a href="http://todomvc.com">you</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
```

#####Add the class for the text field 
in ```app/components/new-todo.js```

```
export default Ember.TextField.extend({
	classNames: 'new-todo'
});
```

#####Add an action for the input field

```
createTodo=(action 'createTodo')
```
#####Generate a new controller

``` ember generate controller application```

#####Catch the action from the input field with the controller
in the ```app/controllers/application.js```

```
import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTodo(content){
			this.store.createRecord('todo', {label: content})
		}
	}
});
```

#####Generate a new model
```ember generate model todo```

#####Add a simple model

```
import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(), 
	isComplete: DS.attr()
});

```

#####Make the Application component trigger an event that creates the createTodo action
In ```app/components/new-todo.js```

```
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
```







