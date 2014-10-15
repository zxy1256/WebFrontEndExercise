var app = app || {};

// Model
app.ToDoItem = Backbone.Model.extend({
	defaults: {
		content: '',
		completed: false		
	},

	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});

var ToDoList = Backbone.Collection.extend({
	model: app.ToDoItem,
});
app.ToDos = new ToDoList();

// View
app.AppView = Backbone.View.extend({
	el: '#app',

	events: {
		'keypress #new-todo': 'createOnEnter'
	},

	initialize: function() {
		this.$input = this.$('#new-todo');

		this.listenTo(app.ToDos, 'add', this.addOne);
		this.listenTo(app.ToDos, 'reset', this.reset);

		// app.ToDos.fetch();
	},

	addOne: function(todo) {
		var view = new app.ToDoView({model: todo});
		$('#todo-list').append(view.render().el);
		console.log("Added one");
	},

	reset: function() {
		$('#todo-list').html('');
	},

	createOnEnter: function(event) {
		console.log('createOnEnter');
		if (event.which !== 13 || !this.$input.val().trim()) {
			return;
		}
		var newToDoItem = {
			content: this.$input.val().trim(),
			completed: false
		}
		app.ToDos.add(newToDoItem);
		this.$input.val('');
	}
});


app.ToDoView = Backbone.View.extend({
	tpl: _.template($('#todoitem-template').html()),

	tagName: 'div',
	className: 'row',

	events: {
		'dblclick .todo-item': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html(this.tpl(this.model.toJSON()));
		this.$input = this.$('.edit');
		return this;
	},

	edit: function() {
		console.log('edit');
		this.$el.addClass('editing');
		this.$input.focus();
	},

	close: function() {
		var value = this.$input.val().trim();

		if (value) {
			this.model.save({title: value});
		}

		this.$el.removeClass('editing');
	},

	updateOnEnter: function(e) {
		if (e.which === 13) {
			this.close();
		}
	}
});

// Router
app.Router = Backbone.Router.extend({
})

// Startup
$(function() {
	app.appView = new app.AppView();
});