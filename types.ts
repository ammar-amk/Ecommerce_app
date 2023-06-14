export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
  }
  
  export interface Query {
    products: Product[];
    product(id: string): Product | undefined;
  }
  
  export interface Mutation {
    createProduct(name: string, price: number, description?: string): Product;
    updateProduct(id: string, name?: string, price?: number, description?: string): Product | null;
    deleteProduct(id: string): string | null;
  }
  