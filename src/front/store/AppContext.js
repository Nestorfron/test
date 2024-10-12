import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes para la validación
import getState from "./flux";

// Crea el contexto
export const Context = React.createContext(null);

const AppContext = ({ children }) => {
  const [state, setState] = useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: Object.assign(state.store, updatedStore),
          actions: { ...state.actions }
        })
    })
  );

  useEffect(() => {
    // Aquí puedes realizar peticiones fetch o inicializar el estado global al cargar la app
  }, []);

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

// Agrega la validación de tipos para el prop children
AppContext.propTypes = {
  children: PropTypes.node.isRequired // Valida que children sea un nodo React
};

export default AppContext;
