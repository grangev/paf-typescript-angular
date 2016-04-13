/// <reference path="../app.ts" />

'use strict';

module appApp {
  export class Geturl {

    public dataJ:any;
    public test: string;
    public static $inject:string[] = ['$scope', '$http'];

    constructor (private $http: ng.IHttpService) {
      this.test= 'test94CLEBARCATMTC'
    }

    getdataurl(){
      this.$http.get('../../data/data.json').success(
        (data, status) => this.dataJ = data
      );

    }

  }
}

angular.module('appApp')
  .service('getUrl', appApp.Geturl);
