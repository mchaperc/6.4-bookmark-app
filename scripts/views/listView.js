export default Backbone.View.extend({

	template: JST.list,

	tagName: 'ul',
	className: 'bookmark-list-container',

	events: {
		'click .bookmark-item-tag': 'showTags',
	},

	initialize: function() {
		this.render();
		this.listenTo(this.collection, 'update', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	showTags: function(e) {

		var tag = e.target.innerHTML;
		var filteredList = [];
		filteredList.push(_.filter(this.collection.models, (function(item) {
			return item.attributes.tag === tag
		})));
		filteredList = _.flatten(filteredList);
		console.log(JSON.stringify(filteredList));
		this.$el.html(this.template(JSON.stringify(filteredList)));

	}

});