/// <reference path="../model/notapaf.ts" />
/// <reference path="../../../typings/main.d.ts" />

'use strict';
module appApp {
  import INotapaf = model.INotapaf;
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
      let notapafList: INotapaf[] = [];
      if(localStorage.getItem("notapaf")!=null){
        notapafList = JSON.parse(localStorage.getItem("notapaf"));
      }
      notapafList.push(this.scope.notapaf);
      localStorage.setItem("notapaf", JSON.stringify(notapafList));

      $('#formUrl').modal('hide');
      this.scope.notapaf.keywords = [];
      var form: any = $('#notapafParent').find('form')[0];
      form.reset();
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
