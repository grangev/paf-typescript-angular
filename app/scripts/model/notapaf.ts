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

  /* Constraints due to the usage of tags-input directive */
  export interface ITag {
    text : string;
  }
  export interface INotapaf {
    id?: number;
    name: string;
    url: string;
    description: string;
    comments: IComment[];
    rated: number;
    keywords: ITag[];
    contributions: number;
    position?: ICoordinate;
  }
}
