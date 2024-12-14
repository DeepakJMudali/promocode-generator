import {createStore,combineReducers} from "redux";
import rootReducer from "../Reducer/reducer"
const storeConfig=()=>{
    const store=createStore(combineReducers({rootReducer}))
    return store;
}
export default storeConfig;