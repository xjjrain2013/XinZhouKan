define( ['models/PostModel'], function ( PostModel ) {
	var PostCollection = Backbone.Collection.extend({
		model: PostModel,
		url: './data/posts.json'
	});

	return PostCollection;
});