var Bookmark = Backbone.Model.extend({

	idAttribute: '_id',
	defaults: {
		title: '',
		url: '',
		tag: ''
	}

});

var BookmarkCollection = Backbone.Collection.extend({

	model: Bookmark,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_bookmarks'

});

export default {Bookmark, BookmarkCollection};