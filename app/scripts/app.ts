/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';

angular.module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/formulaire/:namedUrl', {
        templateUrl: 'views/commentaireForm.html',
        controller: 'URLEvaluationController',
        controllerAs: 'controller'
      })
      .when('/map', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when("/not_found", {
        templateUrl: '404.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
