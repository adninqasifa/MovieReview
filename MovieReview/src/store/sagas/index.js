import ACTION from '../types';
import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

// function getListMovies(payload) {
//   if (payload == 1 || payload == 0){
//     return axios
//       .get(
//         'https://api.themoviedb.org/3/trending/movie/day?api_key=a0780226bee6658e557a71b66335aefd',
//       )
//       .then((e) => e.data.results)
//       .catch((error) => error);
//   }
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=a0780226bee6658e557a71b66335aefd&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${payload}`,
//     )
//     .then((e) => e.data.results)
//     .catch((error) => error);
// }

function getListMovies(payload) {
  return axios
  .get(
    'http://54.254.205.124:3000/movie'
  )
  .then((e) => e.data.data)
  .catch((error) => error)
}

// function getListMovies(payload) {
//   if (payload == "All" || payload == ""){
//     return axios
//       .get(
//         'http://54.254.205.124:3000/movie'
//       )
//       .then(e => e.data.results)
//       .catch((error) => error)
//   }
//   return axios
//     .get(
//       `http://54.254.205.124:3000/category=${payload}`
//     )
//     .then(e => e.data.results)
//     .catch((error) => error)
// }

// function getMoviesByGenre(payload) {
//   return axios
//     .get(
//       `http://54.254.205.124:3000/category`,
//     )
//     .then((e) => {
//       e.data.data
//       console.log(e.data);
//     })
//     .catch((error) => error)
// }

function getModalDetails(payload) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${payload}?api_key=a0780226bee6658e557a71b66335aefd&language=en-US`,
    )
    .then((e) => e.data)
    .catch((error) => error);
}
//'http://ec2-54-254-205-124.ap-southeast-1.compute.amazonaws.com:3000/user/signup';
//'https://poster-movies.herokuapp.com/register';
async function handlingRegister(payload) {
  let url = 'http://ec2-54-254-205-124.ap-southeast-1.compute.amazonaws.com:3000/user/signup';
  const res = await axios({
    method: 'POST',
    url,
    data: qs.stringify({
      email:payload.email,
      password:payload.password,
      passwordConfirmation: payload.confirmPassword,
      fullName: payload.name,
      username: payload.username,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  //console.log(res);
  return res.data.token;
}
//http://ec2-18-141-187-211.ap-southeast-1.compute.amazonaws.com:3000/user/login
//'https://poster-movies.herokuapp.com/login';
async function handlingLogin(payload) {
  let url = 'http://ec2-54-254-205-124.ap-southeast-1.compute.amazonaws.com:3000/user/login';
  const res = await axios({
    method: 'POST',
    url,
    data: qs.stringify({
      email:payload.email,
      password: payload.password,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  //console.log(res);
  return res.data.token;
}

function* changeEmail({payload}) {
  try {
    yield put({type: ACTION.SET_EMAIL_SUCCESS, payload: payload.toLowerCase()})
  } catch (e) {
    console.log(e.message);
  }
}

function* changePass({payload}) {
  try {
    yield put({type: ACTION.SET_PASSWORD_SUCCESS, payload: payload})
  } catch (e) {
    console.log(e.message);
  }
}

function* changeList({payload}) {
  //console.log("Ini Change List");
  try {
    const results = yield call(getListMovies, payload);
    // let n = []
    // console.log(payload)
    // results.forEach((el) => {
    //   if (el.category[0].name == payload) {
    //     n.push(el)
    //   }
    //   //console.log(el.category[0].name == payload);
    // })
    // console.log(n);
    yield put({type: ACTION.SET_LIST_HOME_PAGE, payload: results})
  } catch (e) {
    console.log(e.message);
  }
}

function* changeModalDetail({payload}) {
  try {
    const results = yield call(getModalDetails, payload);
    yield put({type: ACTION.SET_DETAIL_PAGE, payload: results})
  } catch (e) {
    console.log(e.message);
  }
}

function* handleRegister({payload}) {
  try {
    const message = yield call(handlingRegister, payload);
    //const getToken = yield call(handlingLogin, payload);
    yield put({type: ACTION.REGISTERED_SUCCESS, payload: message});
    //yield put({type: ACTION.SET_EMAIL_SUCCESS, payload: getToken})
  } catch (e) {
    yield put({type: ACTION.REGISTERED_FAILED, payload: e.message});
    console.log(e.message);
  }
}

function* handleLogin({payload}){
  try{
    const getToken = yield call(handlingLogin, payload);
    yield put({type:ACTION.REGISTERED_SUCCESS, payload: {getToken: getToken, username: payload.email}})
  }catch(e){
    //yield put({type: ACTION.REGISTERED_FAILED, payload: e.message})
    console.log(e.message)
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION.SET_EMAIL_REQUESTED, changeEmail);
  yield takeLatest(ACTION.SET_PASSWORD_REQUESTED, changePass);
  yield takeLatest(ACTION.SET_LIST_REQUESTED, changeList);
  yield takeLatest(ACTION.SET_DETAIL_REQUESTED, changeModalDetail);
  yield takeLatest(ACTION.REGISTERED_REQUESTED, handleRegister);
  yield takeLatest(ACTION.LOGIN_REQUESTED, handleLogin);
}
