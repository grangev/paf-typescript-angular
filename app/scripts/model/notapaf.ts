module model{

  export interface IComment {
    comment : string;
    rate : number;
    date : Date;
  }

  export interface INotapaf {
    name: string;
    url: string;
    description: string;
    comments: IComment[];
    rated: number;
    keywords: string[];
    contributions: number;
  }
}
