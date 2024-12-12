import {AXIOS_REQUEST,set_page} from "../../auth/index"
import { toast } from "react-toastify";

export const getData = (params) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("cms/Quickmenuload",{})
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: "QUICK_GET_ALL_DATA", data: rdata.data })
      dispatch({
        type: "QUICK_GET_DATA",
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
  return dispatch => dispatch({ type: "QUICK_FILTER_DATA", value })
}

export const menudelete = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("cms/Quickmenudelete",{data : value})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: "QUICK_GET_ALL_DATA", data: rdata.data })
        dispatch({
          type: "QUICK_GET_DATA",
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
      var rdata = await AXIOS_REQUEST("cms/Quickmenusave",{data : data})
        if(rdata.status){
          var rows = set_page(params,rdata);
          dispatch({ type: "QUICK_GET_ALL_DATA", data: rdata.data })
          var fdata =rows['fdata'];
          var totalPages = rows['totalPages'];
          dispatch({
          type: "QUICK_GET_DATA",
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
      var rdata = await AXIOS_REQUEST("cms/Quickmenuupdate",{data : datas})
        if(rdata.status){
          var rows = set_page(params,rdata);
          var fdata =rows['fdata'];
          dispatch({ type: "QUICK_GET_ALL_DATA", data: rdata.data })
          var totalPages = rows['totalPages'];
          dispatch({
              type: "QUICK_GET_DATA",
              data: fdata,
              totalPages:totalPages,
              params
          })
        }else{
          toast.error("fail")
        }
    }
}