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
    public static storage = "notapaf";

    constructor(private $http:ng.IHttpService, private $q:IQService) {
      // if (this.data === null) {
      //   this.$http.get('../../data/data.json')
      //     .then((data) => {
      //         this.data = data.data as model.INotapaf[];
      //       }
      //     );
      // }
      this.data = [];
      if(localStorage.getItem(Geturl.storage)!=null){
        this.data = JSON.parse(localStorage.getItem(Geturl.storage));
      }

    }

    addData(data:model.INotapaf):void {



      this.data.push(data);
      localStorage.setItem(Geturl.storage, JSON.stringify(this.data));
    }

    getData():model.INotapaf[] {
      return this.data;
    }

    clearData():void{
      this.data=[];
      localStorage.clear();
    }

    removeItem(name:string):void{
      for (let i = 0 ; i<this.data.length; i++){
        if (this.data[i].name === name ){
          this.data.splice(i,1);
        }
      }
      localStorage.setItem(Geturl.storage, JSON.stringify(this.data));

    }
  }
}

angular.module('appApp')
  .service('getUrl', appApp.Geturl);
