import ACTION from '../types';

export const chEmail = (payload) => {
  return {type: ACTION.SET_EMAIL_REQUESTED, payload: payload};
};

export const chPass = (payload) => {
  return {type: ACTION.SET_PASSWORD_REQUESTED, payload: payload};
};

export const chList = (payload) => {
  return {type: ACTION.SET_LIST_REQUESTED, payload: payload};
};

export const chDetail = (payload) => {
  return {type: ACTION.SET_DETAIL_REQUESTED, payload: payload};
};

export const chVisibility = (payload) => {
  return {type: ACTION.SET_VISIBILITY, payload: payload};
};

export const showForm = (payload) => {
  return {type: ACTION.SHOW_FORM_STAR, payload: payload};
};

export const registrationForm = (payload) => {
  return {type: ACTION.REGISTERED_REQUESTED, payload: payload};
};

export const loginForm = (payload) => {
  return {type: ACTION.LOGIN_REQUESTED, payload: payload};
};

export const resetError = () => {
  return {type: ACTION.RESET_ERROR};
};

export const changeRedirect = () => {
  return {type: ACTION.CHANGE_REDIRECT};
};

export const getUserProfile = (payload) => {
  return {type:ACTION.REQUEST_USER_PROFILE, payload: payload};
};
