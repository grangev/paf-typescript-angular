module model{

  export interface ICoordinate{
    latitude: number;
    longitude: number;
  }

  export interface IComment {
    comment : string;
    rate : number;
    date : Date;
  }

  export interface INotapaf {
    id?: number;
    name: string;
    url: string;
    description: string;
    comments: IComment[];
    rated: number;
    keywords: string[];
    contributions: number;
    position?: ICoordinate;
  }
}
