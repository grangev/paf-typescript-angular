/// <reference path="../model/notapaf.ts" />
/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../app.ts" />
/// <reference path="../services/geturl.ts" />

'use strict';
module appApp {
  import IHttpService = angular.IHttpService;
  import INotapaf = model.INotapaf;
  export interface IMainScope extends ng.IScope {
    notapaf: model.INotapaf;
    notapafForm: any;
  }

  export class MainCtrl {

    public static $inject = ['$scope', '$http', 'getUrl'];
    public scope:IMainScope;
    public service:Geturl;
    public  dataUrl : model.INotapaf[];


    constructor(private $scope:IMainScope, private $http : IHttpService, private getUrl : Geturl) {
      this.scope = $scope;
      this.service=getUrl;
      this.service.getdataurl().then((data)=> {
        this.dataUrl=data;
      });


    }

    private save: any = () => {
      this.dataUrl.push(this.scope.notapaf);
      this.scope.notapaf = {} as model.INotapaf;
      $('#formUrl').modal('hide');
      var form: any = $('#notapafParent').find('form')[0];
      form.reset();
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
