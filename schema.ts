interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface Query {
  products: Product[];
  product(id: string): Product | undefined;
}

interface Mutation {
  createProduct(name: string, price: number, description?: string): Product;
  updateProduct(id: string, name?: string, price?: number, description?: string): Product | undefined;
  deleteProduct(id: string): string | undefined;
}
