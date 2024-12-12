const initialState = {
    logoimg: null,
    trackingcode: null,
    paymentmethodimgs: null,
    providerimgs: null,
  }


export const firstpagesetting = (state = initialState, action) => {
    switch (action.type) {
      case "FirstpageSetting_logo": {
        return { ...state, logoimg: action.data }
      }
      case "FirstpageSetting_Favicon" :{
        return { ...state, favicon : action.data}
      }
      case "FirstpageSetting_trackingcode": {
        
        return { ...state, trackingcode : action.data
        }
      }
      case "FirstpageSetting_footertext" :{
        return { ...state, footertext : action.data}
      }

      case "FirstpageSetting_title" :{
        return { ...state, title : action.data}
      }

      case "FirstpageSetting_paymentmethod": {
        
        return { ...state, paymentmethodimgs : action.data
        }
      }
      
      case "FirstpageSetting_providerimg": {
        return { ...state, providerimgs : action.data
        }
      }

      default: {
        return state
      }
    }
  }
  