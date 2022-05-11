(() => {
  let productPrice = 100;
  productPrice = 20;
  console.log("Product Price", productPrice);

  let custumerAge: number = 28;
  custumerAge = custumerAge + 1;

  let productInStock: number;
  // console.log()

  // NaN entra como numero
  let discount = parseInt("asd")
  console.log("discount", discount)

  if (discount <= 200) {
    console.log("apply")
  } else {
    console.log("Not apply")
  }

  // Hexadecimal
  let hex = 0xfff;
  console.log("hex => ", hex)
  let binario = 0b01010101;
  console.log("bin ", binario)
})()
