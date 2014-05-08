'use strict';

/* Filters */

angular.module('boLoraApp.filters', [])
  .filter('_.str', function() {

    // Examples: 
    // Simple {{ string_variable | _.str: 'capitalize' }}
    // multiple {{ string_variable | _.str: 'capitalize,titleize' }}
    // This filter does not work with parameters - such as _.str.prune("whatever string",10)

    return function(str, fn, params) {
      str = str || '';
      params = params || [];
      params.unshift(str);
      fn = fn.replace(/ /g,"").split(",");//strip white spaces
      if(fn.length < 2) {
      	return fn[0] ? _.str[fn[0]].apply(this, params) : str;
      } else {
      	_.each(fn, function(func){
      		str = _.str[func](str, params);
      	});
      	return str;
      }
    };
  });
