import { history } from "../../../history"
import axios from "axios"
import { Root} from "../../../authServices/rootconfig"
import {AXIOS_REQUEST} from "./index"
import{setSession,deleteSession,getSession,deleteAXIOS,url_path,PLAYERAXIOS_REQUEST,AFFILIATE_REQUEST} from "./index"
import { toast } from "react-toastify"
import {LOGIN_URL} from "../../../urls"

const BASEURL = Root.adminurl

export const loginWithJWT = user => {
  return async(dispatch) => {
    var rdata = await AFFILIATE_REQUEST("users/adminlogin",{email: user.email,password: user.password})
      if(rdata.status){
        toast.success("Successfully logged In");
        setSession(rdata.token);
        const decoded = rdata.data;
        dispatch({
          type : "LOGIN_WITH_JWT",
          data : rdata.data
        })
        if(url_path() === LOGIN_URL ){
          history.push("/");
        }else{
          history.push("/");
        }
        var rdatas =  await AXIOS_REQUEST("users/get_themeinfor",{data : decoded.email})
          if(rdatas.status){
            dispatch({
              type : "THEMSET",
              theme : rdatas.data
            })
          }
      }else{
        toast.error(rdata.data);
      }
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    deleteSession();
    deleteAXIOS();
    window.location.reload();
    // history.push("/signin");
  }
}

export const session_checked = ()=>{
  return async(dispatch) =>{
      const decoded = getSession();dispatch({
        type : "LOGIN_WITH_JWT",
        data : decoded
      })
      var rdata =  await AXIOS_REQUEST("users/get_themeinfor",{data : decoded.email})
        if(rdata.status){
          dispatch({
            type : "THEMSET",
            theme : rdata.data
          })
        }
      if(url_path() === LOGIN_URL ){
        history.push("/");
      }
  }
}

export const changeRole = role => {
  return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
}

export const getuserslist = () =>{
  return async(dispatch) => {
    var rdata = await AXIOS_REQUEST("users/getlist",{})
      if(rdata.status){
        dispatch({ type: "USERSLIST", payload: rdata.data })
      }else{
        toast.error("fail")
      }
  }
}

export const getuserslist_delete = () =>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST("users/getlist",{});
      if(rdata.status){
        dispatch({type : "DELETEDUSERSLIST",payload : rdata.data})
      }else{
        toast.error("Fail")
      }
  }
}

export const deleteuser = (user) =>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("users/delete",{user : user})
      if(!rdata.status){
        return dispatch({ type: "USERSLIST", payload: rdata.data })
      }else{
      }
  }
}

export const kycdoclist = () =>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST("files/getkycdoclist",{})
      if(rdata.status){
        return dispatch({
          type : "KYCDOCLIST",
          payload : rdata.data
        })
      }else{
      }
  }
}

export const kycdoccheck =(data)=>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST("files/checkkycdoc",{data : data})
      if(rdata.status){
        return dispatch({
          type : "KYCDOCLIST",
          payload : rdata.data
        })
      }else{
      }
  }
}

export const kycdocreject =(data)=>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST("files/rejectkycdoc",{data : data})
      if(rdata.status){
        return dispatch({
          type : "KYCDOCLIST",
          payload : rdata.data
        })
      }else{
      }
  }
}

export const kycdownload = (data) => {
  return dispatch => {
    axios.get(BASEURL + "file/download/"+ data.filename+"/"+data.originalname,).then( response =>{
    })
  }
}

export const changepassword =(user) =>{
  return async(dispatch) =>{
    var rdata = await PLAYERAXIOS_REQUEST("users/adminchangepassword",{data : user})
      if(rdata.status){
        setSession(rdata.token);
        window.location.href= "/";
      }else{
      }
  }
}

export const themeinforsave = (data)=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("users/save_themeinfor",{data : data})
    if(rdata.status){
      dispatch({
        type : "THEMSET",
        theme : rdata.data
      })
    }else{
      toast.error("Fail")
    }
  }
}