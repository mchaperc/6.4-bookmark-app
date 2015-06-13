export default Backbone.View.extend({

	template: JST.form,

	tagName: 'form',
	className: 'bookmark-form',

	events: {
		'submit': 'addBookmark',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	addBookmark: function() {
		console.log('add bookmark');
	}

});