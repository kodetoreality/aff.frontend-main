const initialState = {
    data: [],
    params: null,
    allData: [],
    totalPages: 0,
    filteredData: [],
    totalRecords: 0,
    sortIndex: []
  }
  
  // const determinePopularity = val => {
  //   if (val >= 75) return { popValue: val, color: "success" }
  //   else if (val < 75 && val >= 55) return { popValue: val, color: "primary" }
  //   else if (val < 55 && val >= 35) return { popValue: val, color: "warning" }
  //   else if (val < 35 && val >= 0) return { popValue: val, color: "danger" }
  //   else return { popValue: 0, color: "danger" }
  // }
  
  // const moveIndex = (arr, from, to) => {
  //   let el = arr[from]
  //   arr.splice(from, 1)
  //   arr.splice(to, 0, el)
  // }
  
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
  
 export const sessionusers = (state = initialState, action) => {
    switch (action.type) {
      case "GAMESESSIonREALTIME_GET_DATA":
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
      case "GAMESESSIonREALTIME_GET_ALL_DATA":
        return {
          ...state,
          allData: action.data,
          totalRecords: action.data.length,
          sortIndex: getIndex(action.data, state.data, state.sortIndex)
        }
      case "GAMESESSIonREALTIME_FILTER_DATA":
        let value = action.value
        let filteredData = []
        if (value.length) {
          filteredData = state.allData
            .filter(item => {
              let startsWithCondition =
                item.username.toLowerCase().startsWith(value.toLowerCase()) ||
                item.email.toLowerCase().startsWith(value.toLowerCase()) ||
                item.firstname.toLowerCase().startsWith(value.toLowerCase()) ||
                item.lastname.toLowerCase().startsWith(value.toLowerCase()) ||
                item.currency.toLowerCase().startsWith(value.toLowerCase())
  
              let includesCondition =
              item.username.toLowerCase().startsWith(value.toLowerCase()) ||
              item.email.toLowerCase().startsWith(value.toLowerCase()) ||
              item.firstname.toLowerCase().startsWith(value.toLowerCase()) ||
              item.lastname.toLowerCase().startsWith(value.toLowerCase()) ||
              item.currency.toLowerCase().startsWith(value.toLowerCase())
  
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
  
