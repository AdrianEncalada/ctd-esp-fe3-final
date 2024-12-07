

import { createContext, useReducer, useMemo } from "react";

// Estado inicial
export const initialState = {
  theme: "light",  // Tema predeterminado
  data: [],        // Datos de la API
};

// Crear el Contexto
export const ContextGlobal = createContext(initialState);

// Reducer para manejar cambios de estado
const contextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Proveedor del Contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  // useMemo para mejorar el rendimiento
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
