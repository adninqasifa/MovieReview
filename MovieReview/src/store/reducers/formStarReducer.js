import ACTION from '../types'

const initialState = {
  visible: false,
};

export default function formStarReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ACTION.SHOW_FORM_STAR:
      return {...state, visible: payload};
    default:
      return state;
  }
}
