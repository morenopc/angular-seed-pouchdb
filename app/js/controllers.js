'use strict';

/* Controllers */

angular.module('ehealth.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('PouchDBCtrl', ['$scope', 'PouchFac', function($scope, PouchFac) {
    
    PouchFac.put({_id: 'foo', name: 'bar'});

    PouchFac.info().then(function(info) {
      $scope.numOfDocs = info.doc_count;
    });

    $scope.options = {
      db: PouchFac,
      name: 'Visitor'
    };

    $scope.db = PouchFac;
  }]);
