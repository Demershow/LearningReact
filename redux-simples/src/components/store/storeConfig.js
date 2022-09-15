import { createStore, combineReducers } from "redux";

const  reducers = combineReducers({
    numeros: function (state, action) {
        return {
            min: 7,
            max: 21
        }
    },
})


function storeConfig () {
    return createStore(reducers)
}


export default storeConfig