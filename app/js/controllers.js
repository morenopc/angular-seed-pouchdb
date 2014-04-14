'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('PouchDBCtrl', [function(pouchdb) {
    var db = pouchdb.create('testdb');
    db.put({_id: 'foo', hello: 'world'
    }).then(function(response) {
        return response
    }).catch(function(error) {
        return error
    });
  }]);
