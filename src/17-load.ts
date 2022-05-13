// var _ = require("lodash")
import _ from "lodash"
// agregamos tipado como lo sugiere Vscode instalando una dependencia

const data = [
  {
      username: 'nico',
      role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'seller'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
