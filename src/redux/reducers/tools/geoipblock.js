import {ToolGeoIpBlock_filter,ToolGeoIpBlock_getdata,ToolGeoIpBlock_load} from "../../types/tool"

const initialState = {
    data: [],
    params: null,
    allData: [],
    totalPages: 0,
    filteredData: [],
    totalRecords: 0,
    sortIndex: []
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
  
export  const toolsgeoipblock = (state = initialState, action) => {
    switch (action.type) {
      case ToolGeoIpBlock_getdata:
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
      case ToolGeoIpBlock_load:
        return {
          ...state,
          allData: action.data,
          totalRecords: action.data.length,
          sortIndex: getIndex(action.data, state.data, state.sortIndex)
        }
    
     case ToolGeoIpBlock_filter:
        let value = action.value
        let filteredData = []
        if (value.length) {
          filteredData = state.allData
            .filter(item => {
                var uitem = item.ipaddress + "";
              let startsWithCondition = uitem.toLowerCase().startsWith(value.toLowerCase())
              
  
              let includesCondition = uitem.toLowerCase().startsWith(value.toLowerCase())
            
  
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
        
      default:
        return state
    }
  }
  
