import {
    NumeroMaximoAlterado,
    NumeroMinimoAlterado
} from '../actions/actionType'
const initState = {
    min: 1,
    max: 10
}

export default function (state = initState, action){

      switch (action.type) {
        case NumeroMinimoAlterado:
          return {
            ...state,
            min: action.payload,
          };
        case NumeroMaximoAlterado:
          return {
            ...state,
            max: action.payload,
          };
        default:
          return state
      }
    }
