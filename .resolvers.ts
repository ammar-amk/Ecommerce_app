const products = [
    { id: '1', name: 'Product 1', price: 9.99, description: 'Description 1' },
    { id: '2', name: 'Product 2', price: 19.99, description: 'Description 2' },
  ];
  
  const resolvers = {
    Query: {
      products: () => products,
      product: (parent, { id }) => products.find((product) => product.id === id),
    },
    Mutation: {
      createProduct: (parent, args) => {
        const newProduct = { id: String(products.length + 1), ...args };
        products.push(newProduct);
        return newProduct;
      },
      updateProduct: (parent, { id, ...args }) => {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) return null;
        const updatedProduct = { ...products[index], ...args };
        products[index] = updatedProduct;
        return updatedProduct;
      },
      deleteProduct: (parent, { id }) => {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) return false;
        products.splice(index, 1);
        return true;
      },
    },
  };
  
  export default resolvers;
  