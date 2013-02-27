define(['models/PostModel', 'collections/PostCollection'], function(PostModel, PostCollection) {
	var PostModel = PostModel.extend();
	var PostCollection = PostCollection.extend();
	var NewspaperModel = Backbone.RelationalModel.extend({
		relations: [
			{
				type: Backbone.HasMany,
				key: 'posts',
				relatedModel: 'PostModel',
				includeInJSON: Backbone.Model.prototype.idAttribute,
				collectionType: 'PostCollection',
				reverseRelation: {
					key: 'parentPanel'
				}
			}
		]
	});

	return NewspaperModel;
});