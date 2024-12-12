import {AXIOS_REQUEST,PLAYERAXIOS_REQUEST} from "../../auth/index"
import {toast} from "react-toastify"
import {set_page} from "../../auth/index"

export const getData = (params,filterData) => {
  return  async(dispatch) => {
    var rdata = await AXIOS_REQUEST("netplay/playerlist",{})
      if(rdata.status){
        dispatch({ type: "PLAYERS_GET_ALL_DATA", data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({
          type: "PLAYERS_GET_DATA",
          data: fdata,
          totalPages:totalPages,
          params
        })
      
      }else{
        toast.error("fail");
      }
  }
}

export const signup = (users,params,filterData) => {
  return async(dispatch) =>{
    console.log(users);
    var rdata =  await PLAYERAXIOS_REQUEST("users/adminplayerregister",{user : users})
      if(rdata.status){
        toast.success("success")
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: "PLAYERS_GET_ALL_DATA", data: rdata.data })
          dispatch({
            type: "PLAYERS_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params : rows['params']
          })
          if(filterData && filterData.length > 0){
            dispatch({ type: "PLAYERS_FILTER_DATA",value : filterData })
          }
      }else{
        toast.error(rdata.data);
      }
  }
}


export const filterData = (value,bool) => {
  return dispatch => dispatch({ type: "PLAYERS_FILTER_DATA", value : value,bool : bool })
}
export const depositaction = (data,params,filterData) =>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("netplay/deposittion",{data : data})
      if(rdata.status){
        dispatch({ type: "PLAYERS_GET_ALL_DATA", data: rdata.data })
        var rows =  set_page(params,rdata);
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({
          type: "PLAYERS_GET_DATA",
          data: fdata,
          totalPages:totalPages,
          params
        });
      
      }else{
        
      }

  }
}

export const withdrawaction = (data,params,filterData) =>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("netplay/withdrawaction",{data : data})
      if(rdata.status){
          dispatch({ type: "PLAYERS_GET_ALL_DATA", data: rdata.data })
          var rows =  set_page(params,rdata);
          var fdata = rows['fdata'];
          var totalPages = rows['totalPages'];
          dispatch({
            type: "PLAYERS_GET_DATA",
            data: fdata,
            totalPages:totalPages,
            params
          });
       
      }else{
        
      }
  }
}


export const pagenationchange = (params,data)=>{
  return (dispatch,getState)=>{
    console.log("ddd")
    var row = {
      data : getState().Players.playerslist.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:"PLAYERS_GET_DATA",
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}