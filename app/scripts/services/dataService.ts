/// <reference path="../app.ts" />
/// <reference path="../model/notapaf.ts" />

'use strict';

module appApp {
  import IQService = angular.IQService;
  import IDeferred = angular.IDeferred;
  import IPromise = angular.IPromise;
  export class Geturl {

    public static $inject = ['$http', '$q'];
    public data:model.INotapaf[] = null;

    constructor(private $http:ng.IHttpService, private $q:IQService) {
      if (this.data === null) {
        this.$http.get('../../data/data.json')
          .then((data) => {
              this.data = data.data as model.INotapaf[];
            }
          );
      }
    }

    addData(data:model.INotapaf):void {
      this.data.push(data);
    }

    getData():model.INotapaf[] {
      return this.data;
    }

    clearData():void{
      localStorage.clear();
    }
  }
}

angular.module('appApp')
  .service('getUrl', appApp.Geturl);
