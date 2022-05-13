(() => {
  // const login = (email: string, password: string) => {
  //   console.log(email, password)
  // }

  // login("main@angeldecode.com", "xgfahf")
  // login("main@angeldecode.com", "xgfahf")
  const login = (data: {email: string, password: string}):void => {
    console.log(data.email, data.password)
  }

  login({email: "main@angeldecode.com", password: "xgfahf"})

  type Sizes = "S" | "M" | "X" | "XL";

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }):void => {
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
  console.log(products)
})()
