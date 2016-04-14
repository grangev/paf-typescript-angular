/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../model/notapaf.ts" />
/// <reference path="../services/dataService.ts" />

'use strict';

namespace comments {
  import INotapaf = model.INotapaf;
  import IRoute = angular.route.IRoute;
  import IRouteParamsService = angular.route.IRouteParamsService;
  import ILocationService = angular.ILocationService;
  import IComment = model.IComment;
  import Geturl = appApp.Geturl;

  class Comment implements IComment {
    constructor(public comment:string, public rate:number, public date:Date) {
    }
  }

  export interface IRouteParams extends IRouteParamsService {
    namedUrl:string;
  }

  export class URLEvaluationController {

    static $inject = ["$routeParams", "$location", "getUrl"];

    currentItem:INotapaf = {} as INotapaf;
    newComment:IComment = {rate: 1} as IComment;

    constructor($routeParams:IRouteParams, $location:ILocationService, private getUrl:Geturl) {
      let page = $routeParams.namedUrl;
      let found = false;
      let data:model.INotapaf[] = this.getUrl.getData();

      if (data === null) {
        $location.path("/");
      }

      for (let i = 0; i < data.length; i++) {
        if (data[i].name === page) {
          this.currentItem = data[i];
          found = true;
        }
      }

      if (!found) {
        $location.path("/not_found")
      }

    }

    public addComment() {
      this.newComment = new Comment(this.newComment.comment, this.newComment.rate, new Date());
      this.currentItem.comments.push(this.newComment);
      this.newComment = {rate: 1} as IComment;

      // Calcul de la note moyenne
      let total = 0;
      for (let i = 0; i < this.currentItem.comments.length; i++) {
        total += this.currentItem.comments[i].rate;
      }

      if (this.currentItem.comments.length > 0) {
        this.currentItem.rated = total / this.currentItem.comments.length;
      } else {
        this.currentItem.rated = 1;
      }
    }
  }
}

angular.module('appApp').controller('URLEvaluationController', comments.URLEvaluationController);
