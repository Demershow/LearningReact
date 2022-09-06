import React, { useState } from "react";

const initailState = {
  number: 123,
  text: "context Api + hooks",
};

export const AppContext = React.createContext(initailState);

const Store = (props) => {
  const [state, setState] = useState(initailState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t)
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
