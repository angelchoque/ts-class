import { addProduct, calcStock, products } from "./product.service";

addProduct({
  name: "newProduct",
  createAt: new Date(),
  stock: 12
})
addProduct({
  name: "newProduct",
  createAt: new Date(),
  stock: 12,
  size: "S"
})
products.push({
  name: "newProduct",
  createAt: new Date(),
  stock: 12
})
console.log(products)
const total = calcStock()
console.log(total)
