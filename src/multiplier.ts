const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a +b)
}
// multiplicator(2, 5, "Multiplied number 2 and 5, the result is: ")

console.log(process.argv)

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)