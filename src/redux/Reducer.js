import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  DELETE_DATA_FALIURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  POST_DATA_FALIURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./Action";

const initialState = {
  loading: false,
  posts:[],
  error: "",
  currentpage: 1,
  totalpage: 0,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, posts: action.payload, error: '' };;
    case FETCH_DATA_FAILURE:
        return { loading: false, posts: [], error: action.error };
    case DELETE_DATA_REQUEST:
        return {...state, loading: true}
    case DELETE_DATA_SUCCESS:
        return {...state, loading: false, 
            posts: state.posts.filter(post => post.id !== action.payload)
        }
    case DELETE_DATA_FALIURE:
        return {...state, loading: false, error: action.error}
    case POST_DATA_REQUEST:
      return{...state,loading: true}
      case POST_DATA_SUCCESS: 
      return {...state, loading: false, posts: [...state.posts, action.payload]}
      case POST_DATA_FALIURE:
        return {...state, loading: false, error: action.error}
    default:
      return state;
  }
};
