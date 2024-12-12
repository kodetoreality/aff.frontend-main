import {AXIOS_REQUEST} from "../../auth/index"
import { toast } from "react-toastify";
import {set_page} from "../../auth/index"
import {casinoproviderload,casinoproviderget,casinoproviderfilter,casinoproviderBool} from "../../../types/gameproviders"

export const getData = (params,bool) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("gameprovider/casinoproviderload",{bool : bool})
    console.log(rdata)
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({
        type : casinoproviderBool,
        data : bool
      })
      dispatch({ type: casinoproviderload, data: rdata.data })
      dispatch({
        type: casinoproviderget,
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
  return dispatch => dispatch({ type: casinoproviderfilter, value })
}

export const menuupdate = (datas,params)=>{
  return async(dispatch,getState)=>{
    var bool =  getState().gameproviders.casinoproviders.bool;
    var rdata = await AXIOS_REQUEST("gameprovider/casinoproviderupdate",{data : datas,bool : bool})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        dispatch({ type: casinoproviderload, data: rdata.data })
        var totalPages = rows['totalPages'];
        dispatch({
            type: casinoproviderget,
            data: fdata,
            totalPages:totalPages,
            params
        })
      }else{
        toast.error("fail")
      }
  }
} 

export const pagenationchange = (params,data)=>{
  return (dispatch,getState)=>{
    var row = {
      data : getState().gameproviders.casinoproviders.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type: casinoproviderget,
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}