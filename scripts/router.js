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
		this.bookmark = new Bookmark();
		this.bookmarks.fetch();
		var bookmarkList = new ListView({collection: this.bookmarks});
		var bookmarkForm = new FormView({model: this.bookmark});
		$('#app').append(bookmarkList.view);
		$('#app').append(bookmarkForm.view);
	}

});

var router = new Router();
export default router;