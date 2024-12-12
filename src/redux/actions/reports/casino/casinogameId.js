import {AXIOS_REQUEST,PLAYERAXIOS_REQUEST} from "../../auth/index"
import {toast} from "react-toastify"
import {set_page} from "../../auth/index"
import {REPORTSCASINO_GAMEID_LOAD,REPORTSCASINO_GAMEID_GETDATA,REPORTSCASINO_GAMEID_FILTER} from "../../../types/reports"

export const getData = (params) => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("users/getlist",{})
      if(rdata.status){
        dispatch({ type: REPORTSCASINO_GAMEID_LOAD, data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: REPORTSCASINO_GAMEID_GETDATA,
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          });
        
      }else{
        toast.error("fail")
      }
  }
}

export const filterData = (value,bool) => {
  return dispatch => dispatch({ type: REPORTSCASINO_GAMEID_FILTER, value : value,bool : bool })
}

export const signup = (users,params,) => {
  return async(dispatch) =>{
    console.log(users);
    var rdata =  await PLAYERAXIOS_REQUEST("users/adminregister",{user : users})
      if(rdata.status){
        toast.success("success")
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: REPORTSCASINO_GAMEID_LOAD, data: rdata.data })
          dispatch({
            type: "USER_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          })
         
      }else{
        toast.error(rdata.data);
      }
  }
}

export const updatesignup = (users,params) => {
  return async(dispatch) =>{
    var rdata = await PLAYERAXIOS_REQUEST("users/adminusers_again",{newinfor : users})
      if(rdata.status){
        toast.success("success")
        dispatch({ type: REPORTSCASINO_GAMEID_LOAD, data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
          dispatch({
            type: REPORTSCASINO_GAMEID_GETDATA,
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          })
         
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