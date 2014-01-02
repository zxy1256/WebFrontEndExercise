var app = app || {};

// Model
app.ToDoItem = Backbone.Model.extend({
	url: '',

	defaults: {
		content: '',
		completed: false		
	},

	toggle: function() {
		// this.save({
		// 	completed: !this.get('completed')
		// });
		this.set({
		 	completed: !this.get('completed')
		});
	}
});

var ToDoList = Backbone.Collection.extend({
	model: app.ToDoItem,
	url: '/todos'
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
		'click .toggle': 'togglecompleted',
		'dblclick .view-todo': 'edit',
		'click .destroy': 'clear',
		'keypress .edit-todo': 'updateOnEnter',
		'blur .edit-todo': 'close'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'visible', this.toggleVisible);
	},

	render: function() {
		this.$el.html(this.tpl(this.model.toJSON()));

		this.$el.toggleClass('completed', this.model.get('completed'));

		this.$input = this.$('.edit-todo');
		return this;
	},

	clear: function() {
		this.model.destroy();
	},

	close: function() {
		var value = this.$input.val().trim();

		if (value) {
			//this.model.save({title: value});
			this.model.set({content: value});
		}

		this.$el.removeClass('editing');
	},

	edit: function() {
		console.log('edit');
		this.$el.addClass('editing');
		this.$input.focus();
	},

	togglecompleted: function() {
		this.model.toggle();
	},

	updateOnEnter: function(e) {
		if (e.which === 13) {
			this.close();
		}
	}
});

// Router
app.Router = Backbone.Router.extend({
});

// Startup
$(function() {
	app.appView = new app.AppView();
});