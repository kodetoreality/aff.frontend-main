import {AXIOS_REQUEST,set_page} from "../../auth/index"
import { toast } from "react-toastify";

export const getData = (params) => {
  return  async (dispatch) => {
    var rdata = await AXIOS_REQUEST("cms/Socialmenuload",{})
    if(rdata.status){
      var rows = set_page(params,rdata);
      var fdata =rows['fdata'];
      var totalPages = rows['totalPages'];
      dispatch({ type: "SOCIAL_GET_ALL_DATA", data: rdata.data })
      dispatch({
        type: "SOCIAL_GET_DATA",
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
  return dispatch => dispatch({ type: "SOCIAL_FILTER_DATA", value })
}


export const menudelete = (value,params)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("cms/Socialmenudelete",{data : value})
      if(rdata.status){
        var rows = set_page(params,rdata);
        var fdata =rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: "SOCIAL_GET_ALL_DATA", data: rdata.data })
        dispatch({
          type: "SOCIAL_GET_DATA",
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
      var rdata = await AXIOS_REQUEST("cms/Socialmenusave",{data : data})
        if(rdata.status){
          console.log(rdata.data)
          var rows = set_page(params,rdata);
          dispatch({ type: "SOCIAL_GET_ALL_DATA", data: rdata.data })
          var fdata =rows['fdata'];
          var totalPages = rows['totalPages'];
          dispatch({
          type: "SOCIAL_GET_DATA",
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
      var rdata = await AXIOS_REQUEST("cms/Socialmenuupdate",{data : datas})
        if(rdata.status){
          var rows = set_page(params,rdata);
          var fdata =rows['fdata'];
          dispatch({ type: "SOCIAL_GET_ALL_DATA", data: rdata.data })
          var totalPages = rows['totalPages'];
          dispatch({
              type: "SOCIAL_GET_DATA",
              data: fdata,
              totalPages:totalPages,
              params
          })
        }else{
          toast.error("fail")
        }
    }
}