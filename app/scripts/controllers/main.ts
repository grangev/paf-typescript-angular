/// <reference path="../model/notapaf.ts" />

'use strict';

module appApp {
  export interface IMainScope extends ng.IScope {
    tags: any[];
    notapaf: model.INotapaf;
  }

  export class MainCtrl {

    public static $inject: string[] = ['$scope', '$http'];
    public scope: IMainScope;
    private dataJ : any;

    constructor (private $scope: IMainScope) {
      $scope.tags = [];
      this.scope = $scope;
    }

    private save: any = () => {
      console.log("test");
      console.log(this.scope.notapaf);


    //constructor (private $http: ng.IHttpService) {
    //}

    // getdataurl(){
    //   this.$http.get('../../data/data.json').success(
    //     (data, status) => this.dataJ = data
    //   );        console.log("dsgfezrg"+this.dataJ);
    //
    //
    // }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
