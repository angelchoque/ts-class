type Operation = "multiply" | "add" | "divide"
type Result = number
const calculator = (a: number, b: number, opts: Operation): Result => {
  if (opts === "add") return a + b
  if (opts === "multiply") return a * b
  if (opts === "divide") {
    if (b === 0) throw new Error("cannot divide by 0")    
    return a / b
  }
  throw new Error("Operation is not valid")
} 
// try {
//   console.log(calculator(5, 0, "divide"))
// } catch (e) {
//   console.log("Something went wrong", e)
// }
console.log(process.argv)