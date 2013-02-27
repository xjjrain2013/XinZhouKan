define(['models/NewspaperModel'], function( NewspaperModel ) {
	var NewspaperCollection = Backbone.Collection.extend({
		model: NewspaperModel,
		url: './data/panel.json'
	});

	return NewspaperCollection;
});