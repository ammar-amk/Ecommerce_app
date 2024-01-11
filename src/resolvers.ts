const products = [
  { id: '1', name: 'Product 1', price: 9.99, description: 'Description 1' },
  { id: '2', name: 'Product 2', price: 19.99, description: 'Description 2' },
];

const resolvers = {
  Query: {
    products: () => products,
  },
};

export default resolvers;
