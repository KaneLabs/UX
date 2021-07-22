import { useReducer, useEffect } from 'react';
import { makeFriendlyUrl } from '../fns';

export const SET_RAW = 'SET_RAW';
export const SET_TITLE = 'SET_TITLE';
export const SET_FRIENDLY_URL = 'SET_FRIENDLY_URL';
export const SET_CONTENT = 'SET_CONTENT';
export const SET_INDEX = 'SET_INDEX';
export const SET_TYPE = 'SET_TYPE';
export const RESET = 'RESET';

export const ComposeActions = {
  SET_RAW,
  SET_TITLE,
  SET_FRIENDLY_URL,
  SET_CONTENT,
  SET_INDEX,
  SET_TYPE,
  RESET,
};

const INITIAL_STATE = {
  _raw: '',
  title: '',
  friendlyUrl: '',
  content: {
    0: { type: 'Text', text: '' },
  },
  activeIndex: 0,
  activeType: 'Text',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RAW:
      return { ...state, _raw: action.payload };
    case SET_CONTENT:
      return {
        ...state,
        content: { ...state.content, ...{ [action.payload.index]: action.payload.data } },
      };
    case SET_INDEX:
      return { ...state, activeIndex: action.payload };
    case SET_TYPE:
      return { ...state, activeType: action.payload };
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_FRIENDLY_URL:
      return { ...state, friendlyUrl: action.payload };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useCompose = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    const friendlyUrl = makeFriendlyUrl(state.title);
    dispatch({ type: SET_FRIENDLY_URL, payload: friendlyUrl });
  }, [state.title]);

  return [state, dispatch];
};

export default useCompose;
