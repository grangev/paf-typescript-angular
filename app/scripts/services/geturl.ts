/// <reference path="../app.ts" />
/// <reference path="../model/notapaf.ts" />

'use strict';

module appApp {
  import IQService = angular.IQService;
  import IDeferred = angular.IDeferred;
  import IPromise = angular.IPromise;
  export class Geturl {

    public static $inject = ['$http', '$q'];
    public dataUrl : model.INotapaf[];

    constructor (private $http: ng.IHttpService, private $q : IQService) {
    }

    getdataurl() : IPromise<model.INotapaf[]> {
      let deffered: IDeferred<model.INotapaf[]> = this.$q.defer();
      this.$http.get('../../data/data.json')
        .then( (data) => deffered.resolve(data.data as model.INotapaf[])
      );
      return deffered.promise;
    }

  }
}

angular.module('appApp')
  .service('getUrl', appApp.Geturl);
