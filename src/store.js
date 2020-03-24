import {createStore} from "redux";
import {colorReducer} from "./reducers/colorReducer"

export const store = createStore(colorReducer);