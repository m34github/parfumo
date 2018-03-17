import { GET_FRAGRANCE } from '../actions';

const initialState = {
  payload: {},
  meta: {
    isLoaded: false
  }
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRAGRANCE: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta
      });
    }
    default: {
      return state;
    }
  }
};

export default home;
