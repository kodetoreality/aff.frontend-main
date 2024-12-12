import {AXIOS_REQUEST} from "../../auth/index"
import { toast } from "react-toastify";
import {set_page} from "../../auth/index"

export const getData = params => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("netplay/gamesrealtimeusers",{})
      if(rdata.status){

        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "GAMESESSIonREALTIME_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params
          })
          dispatch({ type: "GAMESESSIonREALTIME_GET_ALL_DATA", data: rdata.data })
      }else{
        toast.error("fail")
      }
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "GAMESESSIonREALTIME_FILTER_DATA", value })
}

export const deleteRow = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("netplay/gamesrealtimeusersdelete",{email : value.email})
      if(rdata.status){
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "GAMESESSIonREALTIME_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params
          })
          dispatch({ type: "GAMESESSIonREALTIME_GET_ALL_DATA", data: rdata.data })
      }else{

      }
  }
}