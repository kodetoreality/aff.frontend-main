import {AXIOS_REQUEST,Filter} from "../auth/index"
import {toast} from"react-toastify"
import {set_page} from "../auth/index"
import {cmslivecasinoget,cmslivecasinoload,cmslivecasinofilter,cmslivecasinoProvider,cmslivecasinoTypes,cmslivecasinoSetProvider,
    cmslivecasinoSetType
} from "../../types/cms"

export const ProviderLoad = (params,bool) =>{
    return async(dispatch)=>{
        var rdata = await AXIOS_REQUEST("xpggames/LivecasinoproviderLoad",{bool : bool})
        if(rdata.status){
            var pdata = rdata.data.pdata;
            var tdata = rdata.data.tdata;
            var gamelist = rdata.data.list;
            var pros = [];
            var types = [{name : "All",value : "All"}];
            
            if(pros){
                for(var i = 0 ; i < pdata.length ; i++){
                    pros.push({name : pdata[i].provider,value : pdata[i].provider});
                }
                dispatch({
                    type : cmslivecasinoProvider,
                    data : pros,setprovider : pros[0],
                    moredata : pdata
                })
            }
            if(tdata){
                for(var j = 0 ; j < tdata.length ; j++){
                    types.push({name : tdata[j],value : tdata[j]});
                }
                dispatch({
                    type : cmslivecasinoTypes,
                    data : types
                })
            }
            dispatch({ type: cmslivecasinoload, data: gamelist});
            var rows =  set_page(params,{data : gamelist});
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages'];
            dispatch({ type: cmslivecasinoget,data: fdata,totalPages:totalPages,params });
        }else{
            toast.error("fail");
        }
    }
}

export const ReProviderLoad = (params,bool) =>{
    return async(dispatch,getState)=>{
        var pvalue = getState().cms.livecasinogamelist.setprovider.value;
        var rdata = await AXIOS_REQUEST("xpggames/LivecasinoProviderChange",{data:pvalue})
        if(rdata.status){
            var gamelist = rdata.data;
            var value = getState().cms.livecasinogamelist.settype.value;

            dispatch({ type: cmslivecasinoload, data: gamelist});
            var filteredData = Filter(value,gamelist);
            var row = {
                data : filteredData
            }
            var rows =  set_page(params,row)
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages']
            dispatch({
                type: cmslivecasinoget,
                data: fdata,
                totalPages:totalPages,
                params
            })          
        }else{
            toast.error("fail");
        }
    }
}

export const filterData = value => {
    return dispatch => dispatch({ type: cmslivecasinofilter, value })
}

export const pagenationchange = (params)=>{
    return (dispatch,getState)=>{
        var value = getState().cms.livecasinogamelist.settype.value;
        
        var filteredData = Filter(value,getState().cms.livecasinogamelist.allData);
        var row = {
            data : filteredData
        }
        var rows =  set_page(params,row)
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages']
        dispatch({
            type: cmslivecasinoget,
            data: fdata,
            totalPages:totalPages,
            params
        })
    }
}

export const providerchange = (value,params) =>{
    return async (dispatch,getState) =>{
        var provider = getState().cms.livecasinogamelist.moredata.find(obj => obj.provider === value);
        var tdata = provider.type;
        var types = [{name : "All",value : "All"}];
        if(tdata){
            for(var i = 0 ; i < tdata.length ; i++){
                types.push({name : tdata[i],value : tdata[i]});
            }
            dispatch({
                type : cmslivecasinoTypes,
                data : types
            })
        }
        dispatch({
            type : cmslivecasinoSetProvider,data : {name :value ,value:value}
        });
        dispatch({
            type : cmslivecasinoSetType,data : {name : "All" ,value:"All"}
        });
        var returndata = await AXIOS_REQUEST("xpggames/LivecasinoProviderChange",{data : value});
        if(returndata.status){
            var gamelist = returndata.data;
            dispatch({ type: cmslivecasinoload, data: gamelist});
            var rows =  set_page(params,{data : gamelist});
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages'];
            dispatch({ type: cmslivecasinoget,data: fdata,totalPages:totalPages,params });
        }else{
            toast.error("server error");
        }
    }
}

export const typeChange =(value,params) =>{
    return async (dispatch,getState) =>{
        dispatch({
            type : cmslivecasinoSetType,data : {name : value ,value:value}
        });
        var allData  = getState().cms.livecasinogamelist.allData;
        var filteredData = Filter(value,allData)        
        var rows =  set_page(params,{data : filteredData});
        var fdata = rows['fdata'];
        var totalPages = rows['totalPages'];
        dispatch({ type: cmslivecasinoget,data: fdata,totalPages:totalPages,params });
    }
}

export const ProviderCheck = (params,bool) =>{
    return async( dispatch,getState) =>{
        var provider = getState().cms.livecasinogamelist.setprovider.value;
        var rdata = await AXIOS_REQUEST("xpggames/LivecasinoProviderCheck",{bool : bool,provider : provider});
        if(rdata.status){
            var gamelist = rdata.data;
            dispatch({ type: cmslivecasinoload, data: gamelist});
            var value = getState().cms.livecasinogamelist.settype.value
            var filteredData = Filter(value,gamelist);
            var row = {
                data : filteredData
            } 
            var rows =  set_page(params,row);
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages']
                dispatch({
                type: cmslivecasinoget,
                data: fdata,
                totalPages:totalPages,
                params
            })
        }else{
            toast.error("error");
        }
    }
}

export const firstpagecheck = (row1,bool,params) =>{
    return async (dispatch,getState) =>{
        if(!row1){
            return;
        }
        var rdata = await AXIOS_REQUEST("xpggames/LivecasinoFirstPageCheck",{bool : bool,row : row1});
        if(rdata.status){
            var gamelist = rdata.data;
            dispatch({ type: cmslivecasinoload, data: gamelist});
            var value = getState().cms.livecasinogamelist.settype.value
            var filteredData = Filter(value,gamelist);
            var row = {
                data : filteredData
            } 
            var rows =  set_page(params,row);
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages']
                dispatch({
                type: cmslivecasinoget,
                data: fdata,
                totalPages:totalPages,
                params
            })
        }else{
            toast.error("error");
        }
    }
}

export const statuspagecheck = (row1,bool,params) =>{
    return async (dispatch,getState) =>{
        if(!row1){
            return;
        }
        var rdata = await AXIOS_REQUEST("xpggames/Livecasinostatuspagecheck",{bool : bool,row : row1});
        if(rdata.status){
            var gamelist = rdata.data;
            dispatch({ type: cmslivecasinoload, data: gamelist});
            var value = getState().cms.livecasinogamelist.settype.value
            var filteredData = Filter(value,gamelist);
            var row = {
                data : filteredData
            } 
            var rows =  set_page(params,row);
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages']
                dispatch({
                type: cmslivecasinoget,
                data: fdata,
                totalPages:totalPages,
                params
            })
        }else{
            toast.error("error");
        }
    }
}