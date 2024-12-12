import {AXIOS_REQUEST,set_page} from "../../auth/index"
import { toast } from "react-toastify";

export const getData = params => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("netplay/realtimeusers",{})
      if(rdata.status){

        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "REALTIME_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params
          })
          dispatch({ type: "REALTIME_GET_ALL_DATA", data: rdata.data })
      }else{
        toast.error("fail")
      }
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "REALTIME_FILTER_DATA", value })
}

export const deleteRow = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("netplay/realtimeusersdelete",{email : value.email})
      if(rdata.status){
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "REALTIME_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params
          })
          dispatch({ type: "REALTIME_GET_ALL_DATA", data: rdata.data })
      }else{

      }
  }
}