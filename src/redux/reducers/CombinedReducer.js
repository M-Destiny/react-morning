import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    reducer1: CategoryReducer,
    reducer2: ProductReducer
})

export default rootReducer;