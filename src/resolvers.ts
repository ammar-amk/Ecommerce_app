interface Book {
  id: string;
  title: string;
  author: string;
}

const books: Book[] = [
  { id: '1', title: 'Book 1', author: 'Author 1' },
  { id: '2', title: 'Book 2', author: 'Author 2' },
];

const resolvers = {
  Query: {
    books: (): Book[] => books,
  },
  Mutation: {
    addBook: (_: any, args: { title: string; author: string }): Book => {
      const newBook: Book = {
        id: String(books.length + 1),
        title: args.title,
        author: args.author,
      };
      books.push(newBook);
      return newBook;
    },
  },
};

export default resolvers;
