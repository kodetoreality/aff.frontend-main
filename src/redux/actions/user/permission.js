import {AXIOS_REQUEST,set_page,AFFILIATE_REQUEST} from "../auth/index"
import { toast } from "react-toastify";
import {permissionload,permissionget,permissionfilter} from "../../types/players"

export const getData = (params) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("users/menuload",{})
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: permissionload, data: rdata.data })
      dispatch({
        type: permissionget,
        data: fdata,
        totalPages:totalPages,
        params
      })
    }else{
      toast.error("fail")
    }
  }
}

export const getDataAgain = (params) => {
  return  async (dispatch) => {
    var rdata = await AFFILIATE_REQUEST("users/menuload",{})
    if(rdata.status){
      dispatch({ type: "PERMISSION_LOAD", data: rdata.data })
    }else{
      toast.error("fail")
    }
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: permissionfilter, value })
}


export const menudelete = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("users/menudelete",{data : value})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: permissionload, data: rdata.data })
        dispatch({
          type: permissionget,
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
      var rdata = await AXIOS_REQUEST("users/menusave",{data : data})
        if(rdata.status){
          var rows = set_page(params,rdata);
          dispatch({ type: permissionload, data: rdata.data })
          var fdata =rows['fdata'];
          var totalPages = rows['totalPages'];
          dispatch({
          type: permissionget,
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
      var rdata = await AXIOS_REQUEST("users/menuupdate",{data : datas})
        if(rdata.status){
          var rows = set_page(params,rdata);
          var fdata =rows['fdata'];
          dispatch({ type: permissionload, data: rdata.data })
          var totalPages = rows['totalPages'];
          dispatch({
              type: permissionget,
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
      data : getState().userslist.permission.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:permissionget,
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}