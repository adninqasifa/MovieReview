import ACTION from '../types'

const initialState = {
  listMovies: [],
};

export default function listReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ACTION.SET_LIST_HOME_PAGE:
      return {...state, listMovies: payload};
    default:
      return state;
  }
}
