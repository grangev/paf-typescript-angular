/// <reference path="../app.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

'use strict';

namespace comments {

  export interface IMyScope extends ng.IScope {
    ratingValue:number;
    max?:number;
    // onRatingSelect:any;
    ro:boolean;
    toggle : any;
    stars : any;
  }

  export class Starrating implements ng.IDirective {
    template = '<ul class="star-rating" ng-class="{readonly: ro}">  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">   <i class="fa fa-star"></i>  </li> </ul>';
    restrict = 'EA';
    scope={
      ratingValue:'=ngModel',
      max:'=?', // optional (default is 5)
      // onRatingSelect:'&?',
      ro:'=?'
    };
    link = (scope:IMyScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
      //element.text('this is the starRating directive');
      if (scope.max == undefined) {
        scope.max = 5;
      }
      function updateStars() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      }
      scope.toggle = function(index) {
        if (scope.ro == undefined || scope.ro === false){
          scope.ratingValue = index + 1;
          // scope.onRatingSelect({
          //   rating: index + 1
          // });
        }
      };
      scope.$watch('ratingValue', function(oldValue, newValue) {
        if (newValue) {
          updateStars();
        }
      })
    };
  }

  export function starRatingFactory() {
    return new comments.Starrating();
  }

}

angular.module('appApp')
  .directive('starRating', comments.starRatingFactory);
