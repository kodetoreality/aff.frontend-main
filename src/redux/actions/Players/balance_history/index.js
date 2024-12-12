import {AXIOS_REQUEST} from "../../auth/index"
import { toast } from "react-toastify";
import {set_page} from "../../auth/index"

export const getData = (params,bool) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("netplay/balance_history",{bool : bool});
    console.log(rdata);
    if(rdata.status){
      console.log(rdata)
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: "PLAYERBALANCE_GET_ALL_DATA", data: rdata.data })
      dispatch({
        type: "PLAYERBALANCE_GET_DATA",
        data: fdata,
        totalPages:totalPages,
        params
      })
    }else{
      toast.error("fail")
    }
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "PLAYERBALANCE_FILTER_DATA", value })
}


export const pagenationchange = (params,data)=>{
  return (dispatch,getState)=>{
    console.log("ddd")
    var row = {
      data : getState().Players.balance_history.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:"PLAYERBALANCE_GET_DATA",
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}