import ACTION from '../types';
const initialState = {
  redirect:false,
  error:'',
};

export default function userReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ACTION.SET_EMAIL_SUCCESS:
      return {
        ...state,
        email: payload,
      };
    case ACTION.SET_PASSWORD_SUCCESS:
      return {
        ...state,
        password: payload,
      };
    case ACTION.REGISTERED_SUCCESS:
      return {
        ...state,
        token: payload,
        redirect: true,
      };
    case ACTION.REGISTERED_FAILED:
      return {
        ...state, error: payload,
      };
    default:
      return state;
  }
}
