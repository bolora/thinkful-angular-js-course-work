'use strict';

var boLoraApp = {};

/*!
 * $script.js v1.3
 * https://github.com/ded/script.js
 * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011
 * Follow our software http://twitter.com/dedfat
 * License: MIT
 */
!function(a,b,c){function t(a,c){var e=b.createElement("script"),f=j;e.onload=e.onerror=e[o]=function(){e[m]&&!/^c|loade/.test(e[m])||f||(e.onload=e[o]=null,f=1,c())},e.async=1,e.src=a,d.insertBefore(e,d.firstChild)}function q(a,b){p(a,function(a){return!b(a)})}var d=b.getElementsByTagName("head")[0],e={},f={},g={},h={},i="string",j=!1,k="push",l="DOMContentLoaded",m="readyState",n="addEventListener",o="onreadystatechange",p=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1};!b[m]&&b[n]&&(b[n](l,function r(){b.removeEventListener(l,r,j),b[m]="complete"},j),b[m]="loading");var s=function(a,b,d){function o(){if(!--m){e[l]=1,j&&j();for(var a in g)p(a.split("|"),n)&&!q(g[a],n)&&(g[a]=[])}}function n(a){return a.call?a():e[a]}a=a[k]?a:[a];var i=b&&b.call,j=i?b:d,l=i?a.join(""):b,m=a.length;c(function(){q(a,function(a){h[a]?(l&&(f[l]=1),o()):(h[a]=1,l&&(f[l]=1),t(s.path?s.path+a+".js":a,o))})},0);return s};s.get=t,s.ready=function(a,b,c){a=a[k]?a:[a];var d=[];!q(a,function(a){e[a]||d[k](a)})&&p(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][k](b),c&&c(d)}(a.join("|"));return s};var u=a.$script;s.noConflict=function(){a.$script=u;return this},typeof module!="undefined"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout)

// load all of the dependencies asynchronously.
$script([      
  'js/services.js',
  'js/controllers.js',
  'js/filters.js',
  'js/directives.js'
], function() {

  //compile less stylesheets
  //less.refresh();

	//load all angular modules
	//_________________________________________________________________________________________

	boLoraApp = angular.module('boLoraApp', [
		"ui.router",
		'boLoraApp.filters',
		'boLoraApp.services',
		'boLoraApp.directives',
		'boLoraApp.controllers'
	])
	.run(
	  [        '$rootScope', '$state', '$stateParams',
	  function ($rootScope,   $state,   $stateParams) {

	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;      

	}])

	// Routing
	//------------------------------------------------
	.config(
			  ['$stateProvider', '$urlRouterProvider',
	  function ($stateProvider,   $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/index");
		$stateProvider
		    .state('index',{
		    	url: "/index",
		    	views: {
			      	"sidebar": {
			      		templateUrl: "partials/shared/sidebar.html",
			      		controller:"courseIndexController"
			      	},
			      	"main": {
			      		templateUrl: "partials/coursework-index/index.html",
			      		controller:"courseIndexController"
			      	}
			    }
		    })
		    .state('unit1', {
		      url: "/unit-1",
		      views:{
		      	"main-content-area@unit1": {
		      		templateUrl: "partials/unit-1/index.html",
		      		controller:"unit1Controller"
		      	}
		      }
		    })
		    .state('unit2', {
		      url: "/unit-2",
		      views:{
		      	"main-content-area@unit1": {
		      		templateUrl: "partials/unit-2/index.html",
		      		controller:"unit2Controller"
		      	}
		      }
		    })
		    .state('unit3', {
		      url: "/unit-3",
		      views:{
		      	"main-content-area@unit1": {
		      		templateUrl: "partials/unit-3/index.html",
		      		controller:"unit3Controller"
		      	}
		      }
		    })
		    .state('unit4', {
		      url: "/unit-4",
		      views:{
		      	"main-content-area@unit1": {
		      		templateUrl: "partials/unit-4/index.html",
		      		controller:"unit4Controller"
		      	}
		      }
		    })
	}]);

	// when all is done, execute bootstrap angular application
	angular.bootstrap(document, ['boLoraApp']);
  

});

