import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from './action';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload)
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page:0,
      }
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let pageIndex = state.page + 1;
        if (pageIndex > state.nbPages - 1) {
          pageIndex = 0;
        }
        return {
          ...state,
          page: pageIndex,
        }
      }
      
      if (action.payload === 'desc') {
        let pageIndexs = state.page - 1;
        if (pageIndexs < 0) {
          pageIndexs = state.nbPages - 1;
        }
        return {
          ...state,
          page: pageIndexs,
        }
      }
      break;
    default:
      throw new Error(`no matching ${action.type} action type`)
  }
} 
