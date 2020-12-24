import ACTION from '../types'

const initialState={
  visible: false,
  release_date:"1234",
  backdrop_path:"",
  poster_path:"",
  original_title:"",
  overview:"",
  vote_average:"",
  vote_count:"",
  genres:[{id:"", name:""}]
}

export default function detailsReducer (state = initialState, action) {
  const {type, payload} = action
  switch(type){
    case ACTION.SET_DETAIL_PAGE:
      console.log(payload)
      return {...state, ...payload, visible:true};
    case ACTION.SET_VISIBILITY:
      return {...state, visible:false}
    default:
      return state;
  }
}