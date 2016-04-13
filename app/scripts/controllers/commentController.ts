/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../model/notapaf.ts" />

'use strict';

namespace comments {
  import INotapaf = model.INotapaf;
  import IRoute = angular.route.IRoute;
  import IRouteParamsService = angular.route.IRouteParamsService;
  import ILocationService = angular.ILocationService;
  import IComment = model.IComment;

  class Comment implements IComment {
    constructor(public comment:string, public rate:number, public date:Date) {
    }
  }

  export interface IRouteParams extends IRouteParamsService {
    namedUrl:string;
  }

  export class URLEvaluationController {

    static $inject = ["$routeParams", "$location"];

    currentItem:INotapaf = {} as INotapaf;
    newComment:IComment = {rate: 1} as IComment;
    items:Array<INotapaf>;

    constructor($routeParams:IRouteParams, $location:ILocationService) {
      this.items = [];
      this.items.push({
        name: "Google",
        url: "http://www.google.com",
        description: "Page d'accueil de Google",
        comments: [
          {comment: 'Un commentaire inutile', rate: 3, date: new Date(2016, 3, 3)},
          {comment: 'Site génial', rate: 5, date: new Date(2016, 3, 3)},
          {comment: 'Juste un indexeur de contenu', rate: 1, date: new Date(2016, 3, 3)}
        ],
        rated: 2,
        keywords: [],
        contributions: 5
      });
      this.items.push({
        name: "Facebook",
        url: "http://www.facebook.com",
        description: "Page d'accueil de Facebook",
        comments: [{comment: 'pas encore de commentaires', rate: 5, date: new Date(2016, 3, 3)}],
        rated: 2,
        keywords: [],
        contributions: 5
      });

      let page = $routeParams.namedUrl;
      let found = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === page) {
          this.currentItem = this.items[i];
          found = true;
        }
      }

      if (!found) {
        $location.path("/not_found")
      }

    }

    public addComment() {
      console.log("We add a comment for " + this.newComment + " with " + this.currentItem.rated);
      this.newComment = new Comment(this.newComment.comment, this.newComment.rate, new Date());
      this.currentItem.comments.push(this.newComment);
      this.newComment = {rate: 1} as IComment;

      // Calcul de la note moyenne
      let total = 0;
      for (let i = 0; i < this.currentItem.comments.length; i++) {
        total += this.currentItem.comments[i].rate;
      }
      if (this.currentItem.comments.length != 0) {
        this.currentItem.rated = total / this.currentItem.comments.length;
      } else {
        this.currentItem.rated = 1;
      }
    }
  }
}

angular.module('appApp').controller('URLEvaluationController', comments.URLEvaluationController);
