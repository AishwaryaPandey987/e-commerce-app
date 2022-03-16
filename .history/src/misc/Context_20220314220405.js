/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react-router-dom';
import productlist from '../pages/Productlist';

export const Provider = props => {
  const createReducer = useReducer();
  const [state, dispatch] = React.useReducer(createReducer(productlist), []);
  const Context = React.createContext();

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
