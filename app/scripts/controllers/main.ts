/// <reference path="../model/notapaf.ts" />
/// <reference path="../app.ts" />
/// <reference path="../services/geturl.ts" />

'use strict';

module appApp {
  export interface IMainScope extends ng.IScope {
    tags:any[];
    notapaf:model.INotapaf;
  }

  export class MainCtrl {

    public static $inject:string[] = ['$scope', '$http'];
    public scope:IMainScope;
    public dataUrl :any;
    public test: string = "azertyuiop";


    constructor(private $scope:IMainScope, private service: Geturl) {
      $scope.tags = [];
      this.scope = $scope;
      this.dataUrl =  service.dataJ;
      this.test = service.test;
    }

    private save:any = () => {
      console.log("test");
      console.log(this.scope.notapaf);
      console.log(this.test);
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
