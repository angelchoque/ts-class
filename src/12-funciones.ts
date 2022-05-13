(() => {

  type Sizes = "S" | "M" | "X" | "XL";
  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson("P1", new Date(), 12, "M");
  console.log(producto1)

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    // variable opcional (no optional chaining)
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }
  const producto2 = createProductToJsonV2("P1", new Date(), 12)
  console.log(producto2)

})()
