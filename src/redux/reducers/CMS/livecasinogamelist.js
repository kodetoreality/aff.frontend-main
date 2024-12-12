
import {cmslivecasinoget,cmslivecasinoload,cmslivecasinofilter,cmslivecasinoTypes,cmslivecasinoProvider,cmslivecasinoSetProvider,cmslivecasinoSetType
} from "../../types/cms"
const initialState = {
    data: [],
    params: null,
    allData: [],
    totalPages: 0,
    filteredData: [],
    totalRecords: 0,
    sortIndex: [],
    providerData : [],
    types : [],
    settype : {name : "All",value : 'All'},
    setprovider : {name : "All",value : 'All'},
    moredata : []
  }
  
  const getIndex = (arr, arr2, arr3, params = {}) => {
    if (arr2.length > 0) {
      let startIndex = arr.findIndex(i => i.id === arr2[0].id) + 1
      let endIndex = arr.findIndex(i => i.id === arr2[arr2.length - 1].id) + 1
      let finalArr = [startIndex, endIndex]
      return (arr3 = finalArr)
    } else {
      let finalArr = [arr.length - parseInt(params.perPage), arr.length]
      return (arr3 = finalArr)
    }
  }
  
export  const livecasinogamelist = (state = initialState, action) => {
    switch (action.type) {
      case cmslivecasinoget:
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          sortIndex: getIndex(
            state.allData,
            action.data,
            state.sortIndex,
            action.params
          )
        }
      case cmslivecasinoload:
        return {
          ...state,
          allData: action.data,
          totalRecords: action.data.length,
          sortIndex: getIndex(action.data, state.data, state.sortIndex)
        }
      case cmslivecasinofilter:
        let value = action.value
        let filteredData = []
        if (value.length) {
          filteredData = state.allData
            .filter(item => {
              let startsWithCondition =
              item.NAME.toLowerCase().startsWith(value.toLowerCase()) ||
              item.ID.toLowerCase().startsWith(value.toLowerCase())

              let includesCondition =
              item.NAME.toLowerCase().startsWith(value.toLowerCase()) ||
              item.ID.toLowerCase().startsWith(value.toLowerCase())
              if (startsWithCondition) {
                return startsWithCondition
              } else if (!startsWithCondition && includesCondition) {
                return includesCondition
              } else return null
            })
            .slice(state.params.page - 1, state.params.perPage)
          return { ...state, filteredData }
        } else {
          filteredData = state.data
          return { ...state, filteredData }
        }

        case cmslivecasinoTypes:{
            return {
                ...state,types : action.data
            }
        }
        

        case cmslivecasinoSetProvider :{
            return {
                ...state,setprovider : action.data
            }
        }
        

        case cmslivecasinoSetType :{
            return {
                ...state,settype : action.data
            }
        }
        
        case cmslivecasinoProvider:{
            return {
                ...state,providerData : action.data,setprovider  :action.setprovider,moredata : action.moredata
            }
        }
      default:
        return state
    }
  }