import {AXIOS_REQUEST} from "../../auth/index"
import { toast } from "react-toastify";
import {set_page} from "../../auth/index"
import {livecasinoproviderload,livecasinoproviderget,livecasinoproviderfilter} from "../../../types/gameproviders"

export const getData = (params) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("gameprovider/livecasinoproviderload",{})
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: livecasinoproviderload, data: rdata.data })
      dispatch({
        type: livecasinoproviderget,
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
  return dispatch => dispatch({ type: livecasinoproviderfilter, value })
}

export const menusave =(data,params)=>{
    return async(dispatch)=>{
      var rdata = await AXIOS_REQUEST("gameprovider/providersave",{data : data})
      if(rdata.status){
        var rows = set_page(params,rdata);
        dispatch({ type: livecasinoproviderload, data: rdata.data })
        var fdata =rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({
          type: livecasinoproviderget,
          data: fdata,
          totalPages:totalPages,
          params
        })
      }else{
        toast.error("fail")
      }
  }
}

export const menuupdate = (datas,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("gameprovider/livecasinoproviderupdate",{data : datas})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        dispatch({ type: livecasinoproviderload, data: rdata.data })
        var totalPages = rows['totalPages'];
        dispatch({
            type: livecasinoproviderget,
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
      data : getState().gameproviders.livecasinoproviders.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type: livecasinoproviderget,
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}