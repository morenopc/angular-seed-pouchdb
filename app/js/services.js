'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

// Inject the pouchdb object into your services
// See: https://github.com/wspringer/angular-pouchdb#usage
// angular.module('myApp.services')
//   .factory('$db', function(pouchdb){
//     // Do something with pouchdb.
//   });
