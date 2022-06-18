export interface PageParams {
  pageNum?: number;
  pageSize?: number;
}

export interface Pages {
  pageNum: number;
  pageSize: number;
  totalPages: number;
  totalRows: number;
}