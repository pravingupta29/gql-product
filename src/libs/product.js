const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { generate } = require("shortid");

const products = require("../../data/product.data");
const writeFile = promisify(fs.writeFile);

const saveProduct = async (allProducts = products) => {
  const fileName = path.join(__dirname, "../data/product.data.json");
  const fileContents = JSON.stringify(allProducts, null, 2);

  try {
    await writeFile(fileName, fileContents);
    const productCount = allProducts.length;
    console.log(`${productCount} product saved`);
  } catch (error) {
    console.error("Error saving product");
    console.error(error);
  }
};

const addProduct = async (product) => {
  const { name, price, productType } = product;

  const newProduct = {
    id: generate(),
    price,
    name,
    productType,
  };
  await saveProduct([...products, newProduct]);
  return newProduct;
};

const fetchProductByID = (productId) => {
  return products.find((product) => product.id === productId);
};

module.exports = {
  addProduct,
  fetchProductByID
};
