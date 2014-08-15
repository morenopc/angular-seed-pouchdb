'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('ehealth.controllers'));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('MyCtrl1');
    expect(myCtrl1).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2');
    expect(myCtrl2).toBeDefined();
  }));
});

describe('PouchDB Controller', function () {
  var scope, service, controller;
  beforeEach(module('ehealth'));
  beforeEach(module('ehealth.controllers'));
  beforeEach(inject(function ($controller, $rootScope, PouchFac) {
    scope = $rootScope.$new();
    service = PouchFac;
    controller = $controller('PouchDBCtrl', {
      '$scope': scope,
      'PouchFac': service
    });
  }));
  it('should get name bar from testdb', function () {
    scope.db.get('name').then(function (value) {
      expect(value).toBe('bar');
    });
  });
});