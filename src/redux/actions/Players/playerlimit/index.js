import {AXIOS_REQUEST} from "../../auth/index"
import { toast } from "react-toastify";
import {set_page} from "../../auth/index"

export const getData = (params) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("cms/playerlimit_load",{})
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: "PLAYERLIMITS_ALL_DATA", data: rdata.data })
      dispatch({
        type: "PLAYERLIMITS_DATA",
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
  return dispatch => dispatch({ type: "PLAYERLIMITS_FILTER_DATA", value })
}


export const menudelete = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("cms/menudelete",{data : value})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: "PLAYERLIMITS_ALL_DATA", data: rdata.data })
        dispatch({
          type: "PLAYERLIMITS_DATA",
          data: fdata,
          totalPages:totalPages,
          params
        })
        }else{
          toast.error("fail")
        }
  }
}

export const menusave =(data,params)=>{
    return async(dispatch)=>{
      var rdata = await AXIOS_REQUEST("cms/menusave",{data : data})
        if(rdata.status){
          var rows = set_page(params,rdata);
          dispatch({ type: "PLAYERLIMITS_ALL_DATA", data: rdata.data })
          var fdata =rows['fdata'];
          var totalPages = rows['totalPages'];
          dispatch({
          type: "PLAYERLIMITS_DATA",
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
      var rdata = await AXIOS_REQUEST("cms/playerlimit_update",{data : datas})
        if(rdata.status){
          var rows = set_page(params,rdata);
          var fdata =rows['fdata'];
          dispatch({ type: "PLAYERLIMITS_ALL_DATA", data: rdata.data })
          var totalPages = rows['totalPages'];
          dispatch({
              type: "PLAYERLIMITS_DATA",
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
    console.log("ddd")
    var row = {
      data : getState().Players.playerlimit.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:"PLAYERLIMITS_DATA",
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}