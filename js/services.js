'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('boLoraApp.services', []).
  value('bolora', {
  	"name":"Bo Lora",
  	"first_name":"Bo",
  	"email":"bo.lora@gmail.com",
  	"image":"http://www.gravatar.com/avatar/f3dba27fa537400dfabacfff88502af6?size=200",
  	"bio":"Work within the Dell Digital Customer Experience team dedicated to improve dell.com",
  	"why":"I'm taking this course because I want to learn more about Angulr than I already know. Specially working with data sources and promises.",
  	"skills":[
  		{
  			"name":"HTML5",
  			"color":"warning"
  		},
  		{
  			"name":"CSS3/LESS",
  			"color":"success"
  		},
  		{
  			"name":"JavaScript",
  			"color":"warning"
  		},
  		{
  			"name":"AngularJS",
  			"color":"warning"
  		},
      {
        "name":"UX",
        "color":"info"
      },
      {
        "name":"Agile",
        "color":"info"
      }
  	]
  }).
  value('course',{
  	"title":"Learn AngularJS",
  	"description":"This course teaches you how to build dynamic, data-driven single page web apps using AngularJS",
  	"url":"http://www.thinkful.com/courses/ANG-001",
  	"units":[
  		{
  			"id":"unit1",
  			"title":"UNIT 1: Introducing AngularJS",
  			"url":"http://www.thinkful.com/courses/ANG-001/unit/1",
  			"lessons":[
  				{
  					"id":"1",
  					"title":"Web Basics Review",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/1/lesson/1"
  				},
  				{
  					"id":"2",
  					"title":"Up and Running with Angular",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/1/lesson/2"
  				},
  				{
  					"id":"3",
  					"title":"Up and Running with Angular",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/1/lesson/3"
  				},
  				{
  					"id":"4",
  					"title":"Up and Running with Angular",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/1/lesson/4"
  				},
  				{
  					"id":"5",
  					"title":"XHR Basics in Angular",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/1/lesson/5"
  				}
  			]
  		},
  		{
  			"id":"unit2",
  			"title":"UNIT 2: Practical Single Page Web Apps in Angular",
  			"url":"http://www.thinkful.com/courses/ANG-001/unit/2",
  			"lessons":[
  				{
  					"id":"1",
  					"title":"Dependency Injection and Services",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/2/lesson/1"
  				},
  				{
  					"id":"2",
  					"title":"Routing, Templates & Views in AngularJS",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/2/lesson/2"
  				},
  				{
  					"id":"3",
  					"title":"Testing Angular Apps",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/2/lesson/3"
  				},
  				{
  					"id":"4",
  					"title":"RESTful Resources and Angular Services with Testing",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/2/lesson/4"
  				}
  			]
  		},
  		{
  			"id":"unit3",
  			"title":"UNIT 3: Bringing the UI to Life",
  			"url":"http://www.thinkful.com/courses/ANG-001/unit/3",
  			"lessons":[
  				{
  					"id":"1",
  					"title":"Reusable UI Components and Custom Directives",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/3/lesson/1"
  				},
  				{
  					"id":"2",
  					"title":"Deeper Into Angular Directives",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/3/lesson/2"
  				},
  				{
  					"id":"3",
  					"title":"Authorization and Authentication",
  					"url":"http://www.thinkful.com/courses/ANG-001/unit/3/lesson/3"
  				}
  			]
  		},
  		{
  			"id":"unit4",
  			"title":"UNIT 4: AngularJS and Beyond & Capstone",
  			"url":"http://www.thinkful.com/courses/ANG-001/unit/4"
  		}
  	],
  	"community": {
  		"title":"Thinkful - AngularJS",
  		"url":"https://plus.google.com/u/0/communities/102958112340480996503"
  	}
  });
