export const fpMng = (state = {}, action) => {
    switch (action.type) {
      case "CMSFPHEADERTEXT": {
        return { ...state, firstpageheader: action.data }
      }
      case "CMSFPMNGDATA1": {
        return { ...state, firstpagesliderimg1 : action.data
        }
      }

      case "CMSFPMNGDATA2": {
        
        return { ...state, firstpagesliderimg2 : action.data
        }
      }

      case "CMSFPMNGDATA3": {
        
        return { ...state, firstpagesliderimg3 : action.data
        }
      }

      case "CMSTEXTLOADDATA": {
        
        return { ...state, firstpagestext : action.data
        }
      }

      case "CMSLIVECASINOMNGDATA": {
        
        return { ...state, livecasinosliderimg : action.data
        }
      }

      case "CMSCASINOMNGDATA": {
        
        return { ...state, casinosliderimg : action.data
        }
      }

      case "CMSVIRTUALMNGDATA" :{
        return { ...state, virtualsliderimg : action.data
        }
      }

      

      



      
      default: {
        return state
      }
    }
  }
  