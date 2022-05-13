// (() => {
//   const calcTotal = (prices: number[]):number => prices.reduce((a,b) => a + b)
//   console.log(calcTotal([1,2,3,4,5]))
// })()

(() => {
  const calcTotal = (prices: number[]): string => {
      let total = 0;
      prices.forEach(item => total += item);
      return total.toString();
  }

  // const rta = calcTotal([1, 2, 1, 1, 1]);
  // console.log(rta);

  // Void no retorna nada
  const printTotal = (prices: number[]): void => {
      const rta = calcTotal(prices);
      console.log(`El total es ${rta}`);
  }

  const rta = printTotal([1, 2, 1, 1, 1]);
})();
