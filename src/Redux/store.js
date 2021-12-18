import { combineReducers, createStore } from "redux";
import { loginreducer } from "./LoginStore.jsx/reducer";


// const rootReducer = combineReducers({
//     login:loginreducer,
// })

export const store = createStore(
    loginreducer
)

console.log(store.getState());