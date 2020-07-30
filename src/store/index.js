import { createStore } from "redux"
import { mainReducer } from "../reducers/index.js"

const initialState = {
    count: 0
}

export default function configureStore() {
    return createStore(mainReducer, initialState, 
        window.__REDUX_DEVTOOLS_EXENTION__ && window.__REDUX_DEVTOOLS_EXENTION__()
        )
}