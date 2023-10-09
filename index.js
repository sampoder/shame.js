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
      console.warn("ಠ_ಠ.... look me in the eyes.")
    }
  }
  global.ಥ_ಥ = global.eval
  global.eval = () => console.warn("ಥ_ಥ.... I'm weeping.")
  global.ಠ_ಠ = global.Function
  global.Function = Function
  global.ᐛ = () => {
    console.log(pog)
  }
}

module.exports = shame
