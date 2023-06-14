import { Product, Query, Mutation } from './types';

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 9.99, description: 'Description 1' },
  { id: '2', name: 'Product 2', price: 19.99, description: 'Description 2' },
];

const resolvers = {
  Query: {
    products: (): Product[] => products,
    product: (_: any, { id }: { id: string }): Product | undefined => products.find((product) => product.id === id),
  },
  Mutation: {
    createProduct: (_: any, { name, price, description }: { name: string, price: number, description?: string }): Product => {
      const product: Product = { id: String(products.length + 1), name, price, description };
      products.push(product);
      return product;
    },
    updateProduct: (_: any, { id, name, price, description }: { id: string, name?: string, price?: number, description?: string }): Product | null => {
      const product: Product | undefined = products.find((product) => product.id === id);
      if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        return product;
      }
      return null;
    },
    deleteProduct: (_: any, { id }: { id: string }): string | null => {
      const index: number = products.findIndex((product) => product.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        return id;
      }
      return null;
    },
  },
};

export default resolvers;
