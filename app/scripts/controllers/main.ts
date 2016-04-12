/// <reference path="../app.ts" />

'use strict';

module appApp {
  export interface IMainScope extends ng.IScope {
    tags: any[];
  }

  export class MainCtrl {

    public static $inject: string[] = ['$scope'];

    constructor (private $scope: IMainScope) {
      $scope.tags = [];
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
