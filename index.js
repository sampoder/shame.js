function shame(){
  let pog = `
    ____   ___   ____ _ 
   |  _ \\ / _ \\ / ___| |
   | |_) | | | | |  _| |
   |  __/| |_| | |_| |_|
   |_|    \\___/ \\____(_)
   
  `
  class Function {
    constructor() {
      console.warn("ಥ_ಥ")
    }
  }
  global.ಥ_ಥ = global.eval
  global.eval = () => console.warn("ಠ_ಠ")
  global.ಠ_ಠ = global.Function
  global.Function = Function
  global.ᐛ = () => {
    console.log(pog)
  }
}

module.exports = shame
