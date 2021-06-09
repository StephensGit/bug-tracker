import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    bugs: [
        { id: 1, bug: 'Text Overlapping on images', device: 'IOS', type: 'Elixir'  },
        { id: 2, bug: 'Text Overlapping on images', device: 'IOS', type: 'Elixir' },
        { id: 3, bug: 'Text Overlapping on images', device: 'IOS', type: 'Elixir'  },
        { id: 4, bug: 'Text Overlapping on images', device: 'IOS', type: 'Elixir'  }
    ] 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    function addBug(bug) {
      dispatch({
        type: "ADD_BUG",
        payload: bug
      });
    }
    function editBug(bug) {
        dispatch({
          type: "EDIT_BUG",
          payload: bug
        });
      }
    
      function removeBug(id) {
        dispatch({
          type: "REMOVE_BUG",
          payload: id
        });
      }
      return (
        <GlobalContext.Provider
          value={{
            bugs: state.bugs,
            addBug,
            editBug,
            removeBug
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
};