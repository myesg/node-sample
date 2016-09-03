const R = require("ramda")

const test = ["Hello World","Selva"]

const strLength = str => str.length

R.pipe(R.map(strLength),R.map(console.log))(test)
