export interface PaginationResponse<T> {
  data: T;
  metadata: {
    pagesLeft: number;
  };
}
