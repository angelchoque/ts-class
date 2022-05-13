(() => {
  type Sizes = "S" | "M" | "X" | "XL";
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  // const products: any[] = [];
  const products: Product[] = [];

  const addProduct = (data: Product):void => {
    products.push(data)
  }
  addProduct({
    title: "newProduct",
    createAt: new Date(),
    stock: 12
  })
  addProduct({
    title: "newProduct",
    createAt: new Date(),
    stock: 12,
    size: "S"
  })
  products.push({
    title: "newProduct",
    createAt: new Date(),
    stock: 12
  })
  console.log(products)
  // products.push("hola")
})()
