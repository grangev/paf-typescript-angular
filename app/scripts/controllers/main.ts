/// <reference path="../model/notapaf.ts" />
/// <reference path="../../../typings/main.d.ts" />

'use strict';
module appApp {
  export interface IMainScope extends ng.IScope {
    notapaf: model.INotapaf;
    notapafForm: any;
  }

  export class MainCtrl {

    public static $inject: string[] = ['$scope'];
    public scope: IMainScope;

    constructor (private $scope: IMainScope) {
      this.scope = $scope;
    }

    private save: any = () => {
      let notapafJson = JSON.stringify(this.scope.notapaf);
      console.log(notapafJson);
      $('#formUrl').modal('hide');
      //this.scope.notapaf = null;
      var form: any = $('#notapafParent').find('form')[0];
      form.reset();
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
