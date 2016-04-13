/// <reference path="../app.ts" />

'use strict';

module appApp {
  import INotapaf = model.INotapaf;
  export interface IMapScope extends ng.IScope {
    map: any;
    notapafList: INotapaf[];
    templateUrl: string;
  }

  export class CarteCtrl {
    constructor (private $scope: IMapScope) {
      $scope.templateUrl = '/views/markerWindow.html';
      if(localStorage.getItem("notapaf") !== null){
        $scope.notapafList  = JSON.parse(localStorage.getItem("notapaf"));
        for(let i: number = 0; i<$scope.notapafList.length; i++){
          // $scope.notapafList[i].position.id = i;
          $scope.notapafList[i].id = i;
        }
        console.log($scope.notapafList);
      }
      $scope.map = { center: { latitude: 20, longitude: 3 }, zoom: 3 };
    }

    onMarkerClicked = (marker, eventName, model) => {
      model.showWindow = !model.showWindow;
    };
  }
}

angular.module('appApp')
  .controller('CarteCtrl', appApp.CarteCtrl);
