import ListView from './views/listView';
import FormView from './views/formView';
import {Bookmark, BookmarkCollection} from './models/bookmarkModel';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index'
	},

	index: function() {
	},

	initialize: function() {
		this.bookmarks = new BookmarkCollection();
		this.bookmarks.fetch();
		var bookmarkList = new ListView({collection: this.bookmarks});
		var bookmarkForm = new FormView({collection: this.bookmarks});
		$('#app').append(bookmarkList.el);
		$('#app').append(bookmarkForm.el);
	}

});

var router = new Router();
export default router;