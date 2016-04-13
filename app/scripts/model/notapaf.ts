module model{

  export interface ICoordinate{
    id?: number;
    latitude: number;
    longitude: number;
  }

  export interface INotapaf {
    id?: number;
    name: string;
    url: string;
    description: string;
    comment: string[];
    rated: number;
    keywords: string[];
    contributions: number;
    position?: ICoordinate;
  }
}
