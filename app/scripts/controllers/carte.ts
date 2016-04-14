/// <reference path="../app.ts" />

'use strict';

module appApp {
  import INotapaf = model.INotapaf;
  import ILocationService = angular.ILocationService;
  export interface IMapScope extends ng.IScope {
    map: any;
    notapafList: INotapaf[];
    templateUrl: string;
  }

  export class CarteCtrl {

    public service:Geturl;

    static $inject = ["$scope", "$location", "getUrl"];

    constructor (private $scope: IMapScope, $location:ILocationService, private getUrl : Geturl) {
      this.service=getUrl;
      $scope.templateUrl = '/views/markerWindow.html';
      $scope.notapafList = this.service.getData();
      if($scope.notapafList.length !== 0){
        for(let i: number = 0; i<$scope.notapafList.length; i++){
          $scope.notapafList[i].id = i;
        }
      }
      $scope.map = {
        center: { latitude: 20, longitude: 3 },
        zoom: 3,
        events:
        { rightclick: function(mapModel, eventName, originalEventArgs)
          {
            var e = originalEventArgs[0];
            var marker: any = {};
            marker.latitude = e.latLng.lat();
            marker.longitude = e.latLng.lng();
            console.log(marker);
            $location.path("/#/");
            $location.replace();

          }
        }};
    }

    onMarkerClicked = (marker, eventName, model) => {
      model.showWindow = !model.showWindow;
    };
  }
}

angular.module('appApp')
  .controller('CarteCtrl', appApp.CarteCtrl);
