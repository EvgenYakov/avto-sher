export interface IRequestCollection {
  page: number;
  limit: number;
  regionName?: string;
}

export interface IResponseCollection<T> {
  metadata: {
    pagesLeft: number;
  };
  data: T[];
}
