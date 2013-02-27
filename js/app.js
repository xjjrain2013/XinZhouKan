define([
		'models/NewspaperModel',
		'collections/NewspaperCollection',
		'GlobalRouter'
	], function(
		NewspaperModel,
		NewspaperCollection,
		GlobalRouter
	) {
	var App = {
		init: function() {
			console.log(typeof Backbone.RelationalModel);
			//所有报纸版面组成的集合
			var newspaperColl = new NewspaperCollection();
			//全局路由
			//var globalRouter = new GlobalRouter();
			//全局舞台--viewport
			var globalStage = null;

			/*newspaperColl.fetch({
				success: function() {
					console.log('NewspaperCollection 加载数据成功...');
					//console.log(newspaperColl.at(1));
				},
				error: function() {
					console.log('NewspaperCollection 加载数据失败...');
				}
			});

			console.log(newspaperColl);*/

			var newspaperModel = new NewspaperModel({
				"name": "第一版new",
				"id": "newspaper-1new",
				"phase": "第一期new",
				"imgSrc": "./img/01.jpg"
			});
			console.log(newspaperModel);

			//newspaperColl.bind('reset', function() {});
		}
	}

	return App;
});