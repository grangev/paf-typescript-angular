/// <reference path="../model/notapaf.ts" />
/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../app.ts" />
/// <reference path="../services/dataService.ts" />

'use strict';
module appApp {
  import IHttpService = angular.IHttpService;
  import INotapaf = model.INotapaf;
  import ILocationService = angular.ILocationService;
  export interface IMainScope extends ng.IScope {
    notapaf: model.INotapaf;
    notapafForm: any;
  }

  export class MainCtrl {

    public static $inject = ['$scope', '$http', 'getUrl', '$location'];
    public scope:IMainScope;
    public service:Geturl;
    public static idUrl:number = 0;

    constructor(private $scope:IMainScope, private $http : IHttpService, private getUrl : Geturl, private $location: ILocationService) {
      this.scope = $scope;
      this.service=getUrl;
    }

    private save: any = () => {
      MainCtrl.idUrl +=1;
      this.scope.notapaf.id=MainCtrl.idUrl;
      this.scope.notapaf.comments = [];
      this.service.addData(this.scope.notapaf);
      this.scope.notapaf = {} as model.INotapaf;
      $('#formUrl').modal('hide');
      var form: any = $('#notapafParent').find('form')[0];
      form.reset();
    }

    private go: any =(url : string) => {
      this.$location.path('/formulaire/'+url);


    }

    private clear : any = () => {
      this.service.clearData();
      this.$location.path('/');
    }

    private removeItem : any  = (name: string) => {
      this.service.removeItem(name);
      this.$location.path('/');
    }
  }
}

angular.module('appApp')
  .controller('MainCtrl', appApp.MainCtrl);
