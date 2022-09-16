const INITIAL_STATE = {
  description: "ler livro",
  list: [
    {
      _id: 1,
      description: "Pagar fatura do cartao",
      done: true,
    },
    {
      _id: 2,
      description: "Pagar cartao credito bradesc",
      done: false,
    },
    {
      _id: 3,
      description: "Consulta medica",
      done: false,
    },
  ],
};


export default (state  = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE':
            return {... state, description: action.payload}
        case 'TODO_SEARCH':
            return {... state, list: action.payload.data}
        default: 
            return state
    }
}