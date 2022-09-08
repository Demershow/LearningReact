import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store/";

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Usuario nao encontrado!</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => exec({ type: "login", name: "Sophia" })}
          >
            Login
          </button>
          <button className="btn" onClick={() => exec({ type: "add2" })}>
            +2
          </button>
          <button className="btn" onClick={() => exec({ type: "x7" })}>
            X7
          </button>
          <button className="btn" onClick={() => exec({ type: "/25" })}>
            /25
          </button>
          <button className="btn" onClick={() => exec({ type: "arredonda" })}>
            Arredondar
          </button>
          <button
            className="btn"
            onClick={() => exec({ type: "addN", numero: -10 })}
          >
            -10
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
