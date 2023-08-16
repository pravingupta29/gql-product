const products = require("../data/product.data");
const { addProduct, fetchProductByID } = require("./libs/product");

const resolvers = {
  Query: {
    product: (_, { id }) => {
      return fetchProductByID(id);
    },
    products: () => products,
  },
  Mutation: {
    addProduct: (_, { product }) => {
      return addProduct(product);
    },
  },
  Product: {
    __resolveReference(productRepresentation) {
      return fetchProductByID(productRepresentation.id);
    },
  },
};

module.exports = resolvers;
