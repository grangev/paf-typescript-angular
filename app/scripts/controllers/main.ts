/// <reference path="../model/notapaf.ts" />
/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../app.ts" />
/// <reference path="../services/geturl.ts" />

'use strict';
module appApp {
  export interface IMainScope extends ng.IScope {
    notapaf: model.INotapaf;
    notapafForm: any;
  }

  export class MainCtrl {

    public static $inject:string[] = ['$scope', '$http'];
    public scope:IMainScope;
    public dataUrl :any;
    public test: string = "azertyuiop";


    constructor(private $scope:IMainScope, private service: Geturl) {
      this.scope = $scope;
      this.dataUrl =  service.dataJ;
      this.test = service.test;
    }

    private save: any = () => {
      let notapafJson = JSON.stringify(this.scope.notapaf);
      console.log(notapafJson);
      $('#formUrl').modal('hide');
      this.scope.notapaf.keywords = [];
      var form: any = $('#notapafParent').find('form')[0];
      form.reset();
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
