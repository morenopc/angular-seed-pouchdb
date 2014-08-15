'use strict';


// Declare app level module which depends on filters, and services
angular.module('ehealth', [
  'ngRoute',
  'pouchdb',
  'ehealth.filters',
  'ehealth.services',
  'ehealth.directives',
  'ehealth.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'partials/partial1.html',
    controller: 'PouchDBCtrl'
  });
  $routeProvider.when('/view2', {
    templateUrl: 'partials/partial2.html',
    controller: 'MyCtrl2'
  });
  $routeProvider.otherwise({
    redirectTo: '/view1'
  });
}])
.factory('PouchFac', ['pouchdb', function(pouchdb) {
  return new pouchdb.create('testdb');
}])
