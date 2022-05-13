(() => {
  let number: number;
  let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myNewUndefined: string | undefined = undefined;
  myNewUndefined = "hola mundo"

  function hi(nombre: string | null) {
    let hello = "hello";
    if (nombre) {
      hello += nombre;
    } else {
      hello += "nobody"
    }
    console.log(hello)
  }
  hi("nicola")
  hi(null)

  function hiV2(nombre: string | null) {
    let hello = "hello";
    hello += nombre?.toLowerCase() || "nobody";
    console.log(hello)
  }
  hiV2("nicola")
  hiV2(null)
})();
