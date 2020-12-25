import ACTION from '../types'

export const chEmail = (payload) => {
  return {type: ACTION.SET_EMAIL_REQUESTED, payload: payload}
}

export const chPass = (payload) => {
  return {type: ACTION.SET_PASSWORD_REQUESTED, payload: payload}
}

export const chList = (payload) => {
  return {type: ACTION.SET_LIST_REQUESTED, payload: payload}
}

export const chDetail = (payload) => {
  return {type: ACTION.SET_DETAIL_REQUESTED, payload: payload}
}
export const chVisibility = (payload) => {
  return {type: ACTION.SET_VISIBILITY, payload: payload}
}