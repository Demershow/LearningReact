export default function reducer(state, action) {
  switch (action.type) {
    case "add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.name } };

    case "x7":
      return { ...state, number: state.number * 7 };
    case "/25":
      return { ...state, number: state.number / 25 };
    case "arredonda":
      return { ...state, number: Math.round(parseInt(state.number)) };
    case "addN":
      return { ...state, number: state.number + action.numero };
    default:
      return state;
  }
}
