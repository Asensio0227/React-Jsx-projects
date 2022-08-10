import { useReducer, useContext, useEffect, createContext } from 'react';
import { reducer } from './reducer';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from './action';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext = createContext();

const initialState = {
  loading: false,
  hits: [],
  query:'react',
  page: 0,
  nbPages:0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchHackers = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SET_STORIES,
        payload: { hits:data.hits, nbPages:data.nbPages}
      })
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  }

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  }

  const handlePage = (venom) => {
    dispatch({type: HANDLE_PAGE, payload: venom });
  }

  useEffect(() => {
    fetchHackers(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  },[state.query,state.page])

  return (
    <AppContext.Provider value={{
      ...state,
      removeStory,
      handleSearch,
      handlePage,
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const  useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppProvider, AppContext };