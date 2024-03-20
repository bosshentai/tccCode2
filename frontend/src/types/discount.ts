export type Discount = {
  id: string;
  name: string;
  description: string;
  type: string;
  value: number;
};

export type PaginationDiscountProps = {
  loading: boolean | null;
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Discount[];
  error: object | string | null;
};

export type DiscountInitialStateProps = {
  error: object | string | null;
  loading: boolean | null;
  data: Discount[];
  success: boolean | null;
};
