import {
    CREATE_PROFILE_REQUEST,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAIL,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    DELETE_PROFILE_REQUEST,
    DELETE_PROFILE_SUCCESS,
    DELETE_PROFILE_FAIL,
    CLEAR_ERRORS,
  } from "../constants/individualProfileConstants.js";
  
  export const initialProfileState = {
    profile: null,
    loading: false,
    error: null,
  };
  
  const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
      case CREATE_PROFILE_REQUEST:
      case EDIT_PROFILE_REQUEST:
      case DELETE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_PROFILE_SUCCESS:
      case CREATE_PROFILE_SUCCESS:
      case EDIT_PROFILE_SUCCESS:
        return {
          ...state,
          profile: action.payload,
          loading: false,
          error: null,
        };
      case DELETE_PROFILE_SUCCESS:
        return {
          ...state,
          profile: null,
          loading: false,
          error: null,
        };
      case GET_PROFILE_FAIL:
      case CREATE_PROFILE_FAIL:
      case EDIT_PROFILE_FAIL:
      case DELETE_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "CLEAR_EXIST_ERRORS":
      case CLEAR_ERRORS:
        return {
                ...state,
                error: null,
                message: null,
        };
      default:
        return { ...state };
    }
  };
  
  export default profileReducer;
  