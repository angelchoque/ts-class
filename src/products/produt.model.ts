export type Sizes = "S" | "M" | "X" | "XL";
export type Product = {
  name: string,
  createAt: Date,
  stock: number,
  size?: Sizes
}
