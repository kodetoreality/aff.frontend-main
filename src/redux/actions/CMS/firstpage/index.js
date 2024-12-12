import {AXIOS_REQUEST} from "../../auth/index"
import {toast} from "react-toastify"

export const Logoload = ()=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/logoimg_load");
        if(saveHandle.status){
            dispatch({
                type : "FirstpageSetting_logo",data : saveHandle.data
            });
        }else{

        }
    }
}

export const Faviconload = ()=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/Faviconload");
        if(saveHandle.status){
            dispatch({
                type : "FirstpageSetting_Favicon",data : saveHandle.data
            });
        }else{

        }
    }
}

export const trackcode_load = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/trackcode_load",{data: data});
       if(saveHandle.status){
            dispatch({
                type : "FirstpageSetting_trackingcode",data : saveHandle.data
            });
        }else{

        }
    }
}


export const trackcodesave = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/trackcode_save",{data: data});
        if(saveHandle.status){
            toast.success("successfully")
        }else{

        }
    }
}

export const footertext_load = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/footertext_load",{data: data});
       if(saveHandle.status){
            dispatch({
                type : "FirstpageSetting_footertext",data : saveHandle.data
            });
        }else{

        }
    }
}


export const footertextsave = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/footertext_save",{data: data});
        if(saveHandle.status){
            toast.success("successfully")
        }else{

        }
    }
}

export const title_load = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/title_load",{data: data});
       if(saveHandle.status){
            dispatch({
                type : "FirstpageSetting_title",data : saveHandle.data
            });
        }else{

        }
    }
}


export const titlesave = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/title_save",{data: data});
        if(saveHandle.status){
            toast.success("successfully")
        }else{

        }
    }
}

export const paymentImgLoad = ()=>{
    return async (dispatch)=>{
var saveHandle = await AXIOS_REQUEST("cms/paymentmethodimg_load");

        if(saveHandle.status){            
            dispatch({
                type : "FirstpageSetting_paymentmethod",data : saveHandle.data
            });
        }else{

        }
    }
}

export const providerImgLoad = ()=>{
    return async (dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/providerimg_load");
        if(saveHandle.status){
            
            dispatch({
                type : "FirstpageSetting_providerimg",data : saveHandle.data
            });
        }else{

        }
    }
}

export const delete_providerimg = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/providerimg_delete",{data : data});
        if(saveHandle.status){
            toast.success("successfully");
            
            dispatch({
                type : "FirstpageSetting_providerimg",data : saveHandle.data
            });
        }else{

        }
    }
}

export const delete_paymentimg = (data)=>{
    return async(dispatch)=>{
        var saveHandle = await AXIOS_REQUEST("cms/paymentimg_delete",{data : data});
        if(saveHandle.status){
            toast.success("successfully");
            dispatch({
                type : "FirstpageSetting_paymentmethod",data : saveHandle.data
            });
        }else{

        }
    }
}
