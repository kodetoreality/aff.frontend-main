import {AXIOS_REQUEST} from "../auth/index"
import { toast } from "react-toastify"

export const YaarPayLoad = type => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/YaarPayLoad",{type})
      console.log('rdata');
      console.log(rdata);
      console.log('rdata');
          if(rdata.status){
              dispatch({ type: "PAYMENTGATEWAY_YAARPAY_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);
          }
    }
}
  
export const YaarPaySave = params => {
    return  async(dispatch) => {
        var rdata = await AXIOS_REQUEST("paymentGateWay/YaarPaySave",{params})
            if(rdata.status){
                toast.success(rdata.data);   
            }else{
                toast.error(rdata.data);   
            }
    }
}


export const netcentLoad = type => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("paymentGateWay/netcentLoad",{type})
        if(rdata.status){
            dispatch({ type: "PAYMENTGATEWAY_NETCENT_DATA", data: rdata.data })
        }else{
            toast.error(rdata.data);
        }
  }
}

export const netcentSave = params => {
    return  async(dispatch) => {
        var rdata = await AXIOS_REQUEST("paymentGateWay/netcentSave",{params})
            if(rdata.status){
                toast.success(rdata.data);   
            }else{
                toast.error(rdata.data);   
            }
    }
}

export const QpayLoad = type => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/QpayLoad",{type})
          if(rdata.status){
              dispatch({ type: "PAYMENTGATEWAY_QPAY_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);   
          }
    }
}
  
export const QpaySave = params => {
    return  async(dispatch) => {
        var rdata = await AXIOS_REQUEST("paymentGateWay/QpaySave",{params})
            if(rdata.status){
                toast.success(rdata.data);   
            }else{
                toast.error(rdata.data);   
            }
    }
}

export const QpayCheckOut = params => {
    return  async(dispatch) => {
        if(!params.email){
            toast.error('email undefined');   
        }else{
            var rdata = await AXIOS_REQUEST("paymentGateWay/QpayCheckOut",{params})
                if(rdata.status){
                    dispatch({ type: "PAYMENTGATEWAY_QPAY_CHEKOUT_DATA", data: rdata });
                }else{
                    toast.error(rdata.data);   
                }
        }
    }
}

export const QpayResults = order_no => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/QpayResults",{order_no})
          if(rdata.status){
              dispatch({ type: "PAYMENTGATEWAY_QPAY_RESULTS_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);   
          }
    }
}