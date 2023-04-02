import { createStore } from 'redux'
import rootReducer from './reducers/CombinedReducer'

const TOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(rootReducer, TOOL)

export default store