(() => {
  let isEnable = true;
  isEnable = false;
  let isEnableNew: boolean = false;

  const random = Math.random()
  console.log("random", random)
  isEnableNew = random >= 0.5 ? true : false;
  console.log("Result: ", isEnableNew)

  const myBoolea: boolean = true;
})()
