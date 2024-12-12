import { combineReducers } from "redux"
import {balance_history} from "./balance_history"
import {kycdocu} from "./kyc"
import {playerlimit} from "./playerlimit"
import {playerslist} from "./players"

const Players = combineReducers({
    balance_history,
    playerlimit,
    kycdocu,
    playerslist
})

export default Players
