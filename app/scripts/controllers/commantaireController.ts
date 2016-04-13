/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../model/notapaf.ts" />

'use strict';

namespace comments {
  import INotapaf = model.INotapaf;

  // export class Comment {
  //
  //   constructor(public content:string, public date:Date){
  //   }
  // }

  export class URLEvaluationController {

    currentItem:INotapaf = {} as INotapaf;
    newComment:string = "";

    constructor() {
      // this.currentItem = {url: "http://www.google.com", comment: [
      //   {content :'Google', date:new Date(2016, 1, 1)},
      //   {content :'Facebook', date:new Date(2016, 1, 2)},
      //   {content :'Twitter', date:new Date(2016, 1, 3)}],
      //   rated: 5};
      this.currentItem = {
        name: "Google",
        url: "http://www.google.com",
        description: "Page d'accueil de Google",
        comment: ['Google', 'Facebook', 'Twitter'],
        rated: 5,
        keywords: [],
        contributions: 5
      };
    }

    public addComment() {
      // this.currentItem.comment.push(new Comment(this.newComment.content, new Date()));
      // this.newComment = new Comment(this.newComment.content, new Date());
      this.currentItem.comment.push(this.newComment);
      this.newComment = "";
    }
  }
}

angular.module('appApp').controller('URLEvaluationController', comments.URLEvaluationController);
