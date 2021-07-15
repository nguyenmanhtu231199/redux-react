import { combineReducers } from "redux";
import hobbyResucer from "./hobby";
import userReducer from "./user";


const rootReducer = combineReducers({
    hobby : hobbyResucer,
    user: userReducer,
})
export default rootReducer;