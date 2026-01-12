export class BaseResponse{
  constructor(ok = true, error = null){
    this.ok = ok
    this.error = error
  }
}

export class AdvResponse extends BaseResponse{
  constructor(ok = true, error = null, data = null, msg = "Success"){
    super(ok, error)
    this.data
    this.msg = msg
  }
}