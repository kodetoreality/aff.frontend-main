import { combineReducers } from "redux"
import chatReducer from "./chat/"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"
import userslist from "./user/"
import cms from "./CMS/"
import paymentGateWay from "./paymentGateWay"
import gameproviders from "./gameprovider"
import Players from "./players/index"
import Reports from "./reports/index"

const rootReducer = combineReducers({
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  cms : cms,
  userslist : userslist,
  paymentGateWay : paymentGateWay,
  gameproviders : gameproviders,
  Players : Players,
  Reports : Reports
})

export default rootReducer