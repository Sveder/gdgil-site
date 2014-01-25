'use strict';

angular.module('gdgilSiteApp', [
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'truncate'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/events', {
				templateUrl: 'views/events.html',
				controller: 'MainCtrl'
			})
			.when('/videos', {
				templateUrl: 'views/videos.html',
				controller: 'VideosCtrl'
			})
			.when('/articles', {
				templateUrl: 'views/articles.html',
				controller: 'ArticlesCtrl'
			})
			.when('/contents', {
				templateUrl: 'views/contents.html',
				controller: 'MainCtrl'
			})
			.when('/item/:id', {
				templateUrl: 'views/content.html',
				controller: 'ContentItemCtrl'
			})
			.when('/experts', {
				templateUrl: 'views/experts.html',
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
