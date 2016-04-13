/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/geturl.ts" />

'use strict';

describe('Service: getUrl', () => {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var getUrl;
  beforeEach(inject(_getUrl_ => {
    getUrl = _getUrl_;
  }));

  it('should do something', () => {
    expect(!!getUrl).toBe(true);
  });

});
