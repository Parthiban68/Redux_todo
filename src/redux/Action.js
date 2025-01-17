import axios from "axios";

//GET DATA
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//DELETE DATA
export const DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FALIURE = "DELETE_DATA_FALIURE";

//POST DATA
export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FALIURE = "POST_DATA_FALIURE";

//PUT DATA
export const PUT_DATA_REQUEST = "PUT_DATA_REQUEST";
export const PUT_DATA_SUCCESS = "PUT_DATA_SUCCESS";
export const PUT_DATA_FALIURE = "PUT_DATA_FALIURE";

//PAGENATION
export const CHANGE_PAGE = 'CHANGE_PAGE';

//SEARCH 
export const SERACH_ITEM = 'SEARCH_ITEM'

//ROUTE TO NEXT PAGE 
export const ROUTE_DATA = 'ROUTE_DATA'

// MIDDLEWARE FOR APICALL
export const fetch = () =>({
  apicall:{
    url:"https://jsonplaceholder.typicode.com/posts",
    onStart:"DATA_REQUEST",
    onSuccess:"DATA_SUCCESS",
    onFailure:"DATA_FAILURE"
  }
})

//FETCHDATA FUNCTIONALITY
export const fetchData = (page = 1, limit = 12) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
    }
  };
};

//DELETE DATA FUNCTIONALITY
export const deleteData = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_DATA_REQUEST });
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      dispatch({ type: DELETE_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: DELETE_DATA_FALIURE, error: error.message });
    }
  };
};

//POST DATA FUNCTIONLATY

export const postData = (data) => {
  return async (dispatch) => {
    dispatch({ type: POST_DATA_REQUEST });
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          userId: data.userId,
          title: data.title,
          body: data.body,
        }
      );

      console.log(response);
      dispatch({ type: POST_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: POST_DATA_FALIURE, error: error.message });
    }
  };
};

//PUT DATA FUNCTIONLATY

export const updatePost = (postId, updatedData) => async (dispatch) => {
  dispatch({ type: PUT_DATA_REQUEST });
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updatedData
    );
    dispatch({type: PUT_DATA_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type : PUT_DATA_FALIURE, error: error.message});
  }
};

//MIDDLEWARE FETCH FUNCTIONLATY

export const dataFetch = (store) => (next) => async(action) =>{
  if(!action.apicall){
    return next(action)
  }
  const {url, onStart, onSuccess, onFailure} = action.apicall;

  if(onStart) store.dispatch({type: onStart})

  try {
    const response = await axios.get(url);
    console.log(response.data);
    store.dispatch({type: onSuccess, payload: response.data})
  } catch (error) {
    store.dispatch({type: onFailure, error: error.message})

  }
}

//PAGENATION FUNCTIONALITY

export const changePage = (page) => (dispatch) =>{
  dispatch({type:CHANGE_PAGE, payload:page})
}


//SEACH FUNCTIONALITY

export const searchItem = (item) => (dispatch) =>{
  dispatch({type:SERACH_ITEM, payload:item})
}

//ROUTE FUNTIONALITY

export const routeData = (data) =>(dispatch) =>{
  dispatch({type:ROUTE_DATA, payload:data})

}