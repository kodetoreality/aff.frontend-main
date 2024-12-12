import { toast } from "react-toastify"
import {AXIOS_REQUEST} from "../auth/index"

export const deleteNewslivecasino = (data) => {
    return async(dispatch) => {
        var rdata =await AXIOS_REQUEST("cms/deleteNewslivecasino", {data : data})
            if (rdata.status) {
                toast.success("Deleted successfully!");
                return dispatch({
                    type: "CMSLIVECASINOMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error('Faild!');
            }
        
    }
}

export const loadlivecasinoMngData = () => {
    return async(dispatch) => {
        var rdata =await AXIOS_REQUEST("cms/loadlivecasinoMngData",{})
            if(rdata.status){
                return dispatch({
                    type: "CMSLIVECASINOMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error("Delete Faild.")
            }
    }
}

export const deleteNewscasino = (data) => {
    return async(dispatch) => {
        var rdata = await AXIOS_REQUEST("cms/deleteNewscasino", {data : data})
            if (rdata.status) {
                toast.success("Deleted successfully!");
                return dispatch({
                    type: "CMSCASINOMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error('Faild!');
            }
    }
}

export const loadcasinoMngData = () => {
    return async(dispatch) => {
        var rdata = await AXIOS_REQUEST("cms/loadcasinoMngData",{},);
        
            if(rdata.status){
                return dispatch({
                    type: "CMSCASINOMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error("Delete Faild.")
            }
        
    }
}

export const load_fpMng_data = (bool) => {
    return async(dispatch) => {
        var rdata = await AXIOS_REQUEST("cms/loadFpMngData",{bool:bool});
        if (rdata.status) {
            var type = ""
            switch(bool){
                case 1 :
                    type = "CMSFPMNGDATA1"
                break;
                case 2 :
                    type = "CMSFPMNGDATA2"
                break;
                case 3 :
                    type = "CMSFPMNGDATA3"
                break;
                default :
                break;
            }
            return dispatch({
                type : type,
                data : rdata.data
            })
        }else{
            toast.error('Faild!');
        }
    }
}


export const reorder_save = (data , bool) =>{
    return async (dispatch)=>{
        var rdata = await AXIOS_REQUEST("cms/reorderChange",{data : data,bool : bool});
        if (rdata.status) {
            var type = ""
            switch(bool){
                case 1 :
                    type = "CMSFPMNGDATA1"
                break;
                case 2 :
                    type = "CMSLIVECASINOMNGDATA"
                break;
                case 3 :
                    type = "CMSCASINOMNGDATA"
                break;
                case 4 :
                    type = "CMSFPMNGDATA2"
                break;
                case 5 :
                    type = "CMSFPMNGDATA3"
                break;
                case 6 :
                    type = "CMSVIRTUALMNGDATA"
                break;
                default :
                 break;
                
            }
            return dispatch({
                type : type,
                data : rdata.data
            })
        }else{
            toast.error('Faild!');
        }
    }
}

export const deleteNews = (data,bool) => {
    return async(dispatch) => {
        var rdata =  await AXIOS_REQUEST("cms/deletenews", {data : data,bool})
        if (rdata.status) {
            toast.success("Deleted successfully!");
            var type = ""
            switch(bool){
                case 1 :
                    type = "CMSFPMNGDATA1"
                break;
                case 2 :
                    type = "CMSFPMNGDATA2"
                break;
                case 3 :
                    type = "CMSFPMNGDATA3"
                break;
                default :
                break;
            }
            return dispatch({
                type : type,
                data : rdata.data
            })
            // return dispatch({
            //     type: "CMSFPMNGDATA",
            //     data:rdata.data
            // })
        }else{
            toast.error('Faild!');
        }
    }
}

export const deleteNewsvirtual = (data) => {
    return async(dispatch) => {
        var rdata =await AXIOS_REQUEST("cms/deleteNewsvirtual", {data : data})
            if (rdata.status) {
                toast.success("Deleted successfully!");
                return dispatch({
                    type: "CMSVIRTUALMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error('Faild!');
            }
        
    }
}

export const loadvirtualMngData = () => {
    return async(dispatch) => {
        var rdata =await AXIOS_REQUEST("cms/loadvirtualMngData",{});
        console.log(rdata)
            if(rdata.status){
                return dispatch({
                    type: "CMSVIRTUALMNGDATA",
                    data:rdata.data
                })
            }else{
                toast.error("Delete Faild.")
            }
    }
}
