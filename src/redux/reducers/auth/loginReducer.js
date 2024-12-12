export const login = (state = { userRole: "admin" }, action) => {
  switch (action.type) {
 
    case "LOGIN_WITH_JWT": {
      return { ...state, values: action.data }
    }
    case "LOGOUT_WITH_JWT": {
      return { ...state, values: action.payload }
    }
  
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole }
    }
    case "USERSLIST" : {
      return { ...state, userslist : action.payload }
    }
    case "DELETEDUSERSLIST" : {
      return { ...state, userslist_deleted : action.payload}
    } 
    case "KYCDOCLIST" :{
      return { ...state, kycdoclist : action.payload}
    }
    default: {
      return state
    }
  }
}
