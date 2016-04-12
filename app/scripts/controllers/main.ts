/// <reference path="../model/notapaf.ts" />

'use strict';

module appApp {
  export interface IMainScope extends ng.IScope {
    tags: any[];
    notapaf: model.INotapaf;
  }

  export class MainCtrl {

    public static $inject: string[] = ['$scope'];
    public scope: IMainScope;

    constructor (private $scope: IMainScope) {
      $scope.tags = [];
      this.scope = $scope;
    }

    private save: any = () => {
      console.log("test");
      console.log(this.scope.notapaf);
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
