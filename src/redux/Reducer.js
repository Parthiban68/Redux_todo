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
  PUT_DATA_FALIURE,
  PUT_DATA_REQUEST,
  PUT_DATA_SUCCESS,
  CHANGE_PAGE,
  SERACH_ITEM,
  ROUTE_DATA,
} from "./Action";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  currentpage: 1,
  totalpage: 0,
  filterposts: [],
  searchterm: "",
  routedata: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: "" };
    case FETCH_DATA_FAILURE:
      return { loading: false, posts: [], error: action.error };
    case DELETE_DATA_REQUEST:
      return { ...state, loading: true };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case DELETE_DATA_FALIURE:
      return { ...state, loading: false, error: action.error };
    case POST_DATA_REQUEST:
      return { ...state, loading: true };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    case POST_DATA_FALIURE:
      return { ...state, loading: false, error: action.error };
    case PUT_DATA_REQUEST:
      return { ...state, loading: true };
    case PUT_DATA_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case PUT_DATA_FALIURE:
      return { ...state, loading: false, error: action.payload };
    case CHANGE_PAGE:
      return {
        ...state,
        currentpage: action.payload,
      };
    case SERACH_ITEM:
      return { ...state, filterposts: action.payload };
    case ROUTE_DATA:
      return { ...state, routedata: action.payload };
    default:
      return state;
  }
};
