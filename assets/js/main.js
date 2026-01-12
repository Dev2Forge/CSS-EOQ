import Utils from './utils.js'

class Main{
  static htmlStyles
  static rootCtn
  static objectsCtn
  
  static async init(){
    Main.rootCtn = document.querySelector("#root")
    //Main.objectsCtn = document.querySelector("#objects")
    
    await Main.loadHTML()
    Main.writeHTML()
  }
  
  static async loadHTML(){
    Main.htmlStyles = Utils.coreHTML()
    //Main.htmlObjects = Utils.objectsHTML()
  }
  
  static writeHTML(){
    Main.rootCtn.innerHTML = `${Main.htmlStyles}`
    //Main.objectsCtn.innerHTML = `${Main.htmlObjects}`
  }
}

Main.init()