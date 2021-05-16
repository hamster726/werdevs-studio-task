import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_NEW_POST,
  UPDATE_POST,
  DELETE_POST,
  UPDATE_COMMENTS,
  CREATE_COMMENT,
  IS_LOADED,
} from "../types";

const initialState = {
  posts: [],
  comments: [],
  isLoaded: true,
  currentPost: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case GET_POST: {
      return {
        ...state,
        currentPost: action.payload,
      };
    }
    case CREATE_NEW_POST: {
    }
    case UPDATE_POST: {
    }
    case DELETE_POST: {
    }
    case UPDATE_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case CREATE_COMMENT: {
    }

    case IS_LOADED: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    default:
      console.log("default dispatch", action);
      return state;
  }
};


export default reducer;
