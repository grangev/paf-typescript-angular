/// <reference path="../app.ts" />

'use strict';

module appApp {


  export class MainCtrl {

    static $inject = ['$scope', '$http'];

    private dataJ : any;

    constructor (private $http: ng.IHttpService) {
    }

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


//
