import { createStore, combineReducers, bindActionCreators } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case "NumeroMinimoAlterado":
        return {
          ...state,
          min: action.payload,
        };
      case "NumeroMaximoAlterado":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 5,
          max: 30,
        };
    }
  },
  names: function (state, action) {
    console.log(state, " ", action);
    return ["Ana", "Bianca", "Felipe"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
