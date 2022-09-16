import { createStore, combineReducers, bindActionCreators } from "redux";
import nmrReducers from'./reducers/reducers'

const reducers = combineReducers({
  numbers: nmrReducers,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
