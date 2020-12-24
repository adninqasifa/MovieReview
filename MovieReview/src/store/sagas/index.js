import ACTION from '../types'
import {takeLatest, call, put} from 'redux-saga/effects'
import axios from 'axios';

function getListMovies(payload) {
  if (payload == 1 || payload == 0){
    return axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a0780226bee6658e557a71b66335aefd'
      )
      .then(e => e.data.results)
      .catch((error) => error)
  }
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=a0780226bee6658e557a71b66335aefd&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${payload}`
    )
    .then(e => e.data.results)
    .catch((error) => error)
}

function getModalDetails(payload){
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${payload}?api_key=a0780226bee6658e557a71b66335aefd&language=en-US`
    )
    .then(e=>e.data)
    .catch((error => error))
}
function* changeEmail({payload}){
  try{
    yield put({type:ACTION.SET_EMAIL_SUCCESS, payload: payload.toLowerCase()})
  } catch(e){
    console.log(e.message)
  }
}
function* changePass({payload}){
  try{
    yield put({type:ACTION.SET_PASSWORD_SUCCESS, payload: payload})
  } catch(e){
    console.log(e.message)
  }
}
function* changeList({payload}){
  try{
    const results = yield call(getListMovies, payload);
    yield put({type:ACTION.SET_LIST_HOME_PAGE, payload: results})
  } catch(e){
    console.log(e.message)
  }
}

function* changeModalDetail({payload}){
  try{
    const results = yield call(getModalDetails, payload);
    yield put({type:ACTION.SET_DETAIL_PAGE, payload: results})
  } catch(e){
    console.log(e.message)
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION.SET_EMAIL_REQUESTED, changeEmail)
  yield takeLatest(ACTION.SET_PASSWORD_REQUESTED, changePass)
  yield takeLatest(ACTION.SET_LIST_REQUESTED, changeList)
  yield takeLatest(ACTION.SET_DETAIL_REQUESTED, changeModalDetail)
}
