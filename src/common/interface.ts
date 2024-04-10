export interface ProductCreate {
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export interface Order {
  sortBy?: any;
  orderBy?: any;
}

export interface Filter {
  name?: string;
  price?: number;
  quantity?: number;
  description?: string;
  active?: boolean;
}

export interface ProductUpdate {
  name?: string;
  price?: number;
  quantity?: number;
  description?: string;
  active?: boolean;
}

export const SORT = ["ASC", "DESC"];
