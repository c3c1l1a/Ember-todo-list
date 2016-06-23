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

