
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
const products;
const productManipulations = {
  getAllProducts: () => {
    console.log("dal");
    return productsArr;
  },
  getThisProducts: (id) => {
    console.log(productsArr[id]);
    return productsArr[id];
  },
  addNewProduct: (obj) => {
    productsArr.push(obj);
    return productsArr;
  },
  updateProduct: (id, obj) => {
    thisObg = productsArr.filter((item) => item.id === id);
    productsArr[productsArr.indexOf(thisObg[0])] = obj;
    return productsArr;
  },
  deleteProduct: (id) => {
    if (id === 0) productsArr.shift();
    else {
      thisObg = productsArr.filter((item) => item.id === id);
      let index = productsArr.indexOf(thisObg[0]);
      productsArr.splice(index, index);
      return productsArr;
    }
  },
  addQuantity: (id) => {
    thisObg = productsArr.filter((item) => item.id === id);
    productsArr[productsArr.indexOf(thisObg[0])].quantity += 1;
    return productsArr;
  },
  subtractQuantity: (id) => {
    thisObg = productsArr.filter((item) => item.id === id);
    productsArr[productsArr.indexOf(thisObg[0])].quantity -= 1;
    return productsArr;
  },
};

module.exports = productManipulations;
