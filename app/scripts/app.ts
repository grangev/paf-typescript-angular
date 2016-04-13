/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';

angular.module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTagsInput',
    'uiGmapgoogle-maps'
  ])
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/formulaire', {
        templateUrl: 'views/commentaireForm.html',
        controller: 'URLEvaluationController',
        controllerAs: 'controller'
      })
      .when('/map', {
        templateUrl: 'views/carte.html',
        controller: 'CarteCtrl',
        controllerAs: 'carte'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);
