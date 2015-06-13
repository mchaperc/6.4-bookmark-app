export default Backbone.View.extend({

	template: JST.form,

	tagName: 'form',
	className: 'bookmark-form',

	events: {
		'submit': 'addBookmark',
	},

	initialize: function() {
		this.render();
		console.log(this.collection);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	addBookmark: function(e) {
		e.preventDefault();
		var bookUrl = this.$('.bookmark-url-input').val();
		var bookTitle = this.$('.bookmark-title-input').val();
		var bookTag = this.$('.bookmark-tag-input').val();
		this.collection.create({
			url: bookUrl,
			title: bookTitle,
			tag: bookTag
		});
		this.$('form').each(function() {
			this.reset();
		})
		console.log('created');
	}

});