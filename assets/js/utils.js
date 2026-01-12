import {BaseResponse, AdvResponse} from './models.js'

export default class Utils{
  constructor(){
    throw new Error("Don't require a instance for this!")
  }
  
  static async getFile(filename = null, isJson = true){
    if(filename === null) {throw new Error("Missing the 'File Name'!")}
    
    let data = new AdvResponse()
    
    try{
      const req = await fetch(filename)
      const res = await isJson === true ? req.json() : req.text()
      
      if(req.ok === true && req.status === 200){
        data.data = await res
        data.ok = req.ok
        data.msg = `The request was successfully with status: ${req.status}`
      } else {
        data.msg = `Tbe request was bad with status: ${req.status}`
        data.ok = req.ok
      }
      
      return data
    } catch(e){
      data.ok = false
      data.msg = "Internal error ... Try again"
      data.error = e
    }
  }

  static coreHTML(){
    return `<div id="ctn-style" class="ctn-styles d-block card m-s">
               <style class="d-block wff hff" contenteditable>body {
  background: #333;
  margin: 0px;
  box-sizing: border-box;
  color: white;
}</style>
            </div>`
  }
  
  static objectsHTML(){
    return `<div class="ctn-objs">
      <div class="obj1">
        <div class="hidden1"></div>
      </div>
      <div class="obj2">
        <div class="hidden2"></div>
      </div>
      <div class="obj3">
        <div class="hidden3"></div>
      </div>
      <div class="obj4">
        <div class="hidden4"></div>
      </div>
      <div class="obj5">
        <div class="hidden5"></div>
      </div>
    </div>`
  }
}