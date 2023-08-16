const { gql } = require("graphql-tag");

const typeDefs = gql`
  #graphql
  enum ProductType {
    FOOD
    NON_FOOD
    MKP
  }

  type Product @key(fields: "id") {
    id: ID!
    name: String!
    price: Float!
    productType: ProductType!
  }

  input AddProductPayload {
    name: String!
    price: Float!
    productType: ProductType!
  }

  type Query {
    product(id: ID): Product
    products: [Product!]!
  }

  type Mutation {
    addProduct(product: AddProductPayload): Product
  }
`;

module.exports = typeDefs;
