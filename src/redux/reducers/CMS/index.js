import { combineReducers } from "redux"
import { fpMng } from "./firstpageMngReducer"
import { livecasinogamelist } from "./livecasinogamelist"
import { firstpagesetting } from "./firstpagesetting"
import { menu } from "./menu"
import { newstext } from "./newstext"
import { social } from "./social"
import { quick } from "./quick"

const cms = combineReducers({
  fpMng,
  livecasinogamelist,
  firstpagesetting,
  menu,
  newstext,
  social,
  quick,
})

export default cms
