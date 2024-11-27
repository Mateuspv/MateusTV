export interface IGenre {
    id?: number;
    name: string;
  }
  export interface ICategory {
    id?: number;
    name: string;
  }

  export interface ISubCategory {
    id?: number;
    name: string;
  }
  export interface ILive {
    id?: string;
    streamName: string;
    streamCard: string;
    tittle: string;
    liveCard: string;
    categories: ICategory;
    genres: IGenre;
    subCategory: ISubCategory;
  }