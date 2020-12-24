import ACTION from '../types'
const initialState={
  error: '',
  email: '',
  password:'',
}

export default function userReducer (state=initialState, action){
  const {type, payload} = action
  switch (type){
    case ACTION.SET_EMAIL_SUCCESS:
      return{
        ...state,
        email:payload
      }
    case ACTION.SET_PASSWORD_SUCCESS:
      return {
        ...state,
        password:payload
      }
    default:
      return state
  }
}
