import {AXIOS_REQUEST,PLAYERAXIOS_REQUEST,AFFILIATE_REQUEST} from "../auth/index"
import {toast} from "react-toastify"
import {set_page} from "../auth/index"

export const getData = (params,filterData) => {
  return  async(dispatch) => {
    var rdata = await AFFILIATE_REQUEST("users/getlist",{})
      if(rdata.status){
        dispatch({ type: "USER_GET_ALL_DATA", data: rdata.data })
        // var rows =  set_page(params,rdata);
        // var fdata = rows['fdata'];
        // var totalPages = rows['totalPages'];
        //   dispatch({
        //     type: "USER_GET_DATA",
        //     data: fdata,
        //     totalPages:totalPages,
        //     params : rows['params']
        //   });
        //   if(filterData && filterData.length > 0){
        //     dispatch({ type: "USER_FILTER_DATA",value : filterData })
        //   }
      }else{
        toast.error("fail")
      }
  }
}

export const filterData = (value,bool) => {
  return dispatch => dispatch({ type: "USER_FILTER_DATA", value : value,bool : bool })
}

export const deleteUser = (sendData,params,filterData) => {
  return  async(dispatch) => {
    var rdata = await AFFILIATE_REQUEST("users/deleteUser",sendData)
      if(rdata.status){
        console.log(rdata);
        dispatch({ type: "USER_GET_ALL_DATA", data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "USER_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          });
          if(filterData && filterData.length > 0){
            dispatch({ type: "USER_FILTER_DATA",value : filterData })
          }
      }else{
        toast.error("Failure")
      }
  }
}

export const block_getData = (params,filterData) => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("users/blockgetlist",{})
      if(rdata.status){
        dispatch({ type: "USER_GET_ALL_DATA", data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "USER_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          });
          if(filterData && filterData.length > 0){
            dispatch({ type: "USER_FILTER_DATA",value : filterData })
          }
      }else{
        toast.error("fail")
      }
  }
}

export const signup = (users,params,filterData) => {
  return async(dispatch) =>{
    var rdata =  await AFFILIATE_REQUEST("users/adminusersadd",{newinfor : users})
      if(rdata.status){
        toast.success("success")
        // var rows =  set_page(params,rdata);
        // var fdata = rows['fdata'];
        // var totalPages = rows['totalPages'];
        dispatch({ type: "USER_GET_ALL_DATA", data: rdata.data })
          // dispatch({
          //   type: "USER_GET_DATA",
          //   data: fdata,
          //   totalPages:totalPages,
          //   params : rows['params']
          // })
          // if(filterData && filterData.length > 0){
          //   dispatch({ type: "USER_FILTER_DATA",value : filterData })
          // }
      }else{
        toast.error(rdata.data);
      }
  }
}

export const updatesignup = (users,params,filterData) => {
  return async(dispatch) =>{
    var rdata = await PLAYERAXIOS_REQUEST("users/adminusers_again",{newinfor : users})
      if(rdata.status){
        toast.success("success")
        dispatch({ type: "USER_GET_ALL_DATA", data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: "USER_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          })
          if(filterData && filterData.length > 0){
            dispatch({ type: "USER_FILTER_DATA",value : filterData })
          }
      }else{
        toast.error(rdata.data);
      }
  }
}

export const pagenationchange = (params,data)=>{
  return (dispatch,getState)=>{
    var row = {
      data : getState().userslist.users.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:"USER_GET_DATA",
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}