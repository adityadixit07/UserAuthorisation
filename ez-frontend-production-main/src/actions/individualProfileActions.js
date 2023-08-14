import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAIL,
  CLEAR_ERRORS,
} from "../constants/individualProfileConstants.js";
import { MAIN_URI } from "../services/helper.js";
import crypto from "crypto-js";

const SECRET_KEY= "THIS_IS_THE_SECRET_KEY_FOR_EZ_KARO_THE_ONE_APP";


// Create new individual profile
export const createIndividualProfile = (profileData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROFILE_REQUEST });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
        "ez_token",
        JSON.parse(localStorage.getItem("auth_token"))
    );

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(profileData),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/profiles`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {

          dispatch({
            type: CREATE_PROFILE_SUCCESS,
            payload: result.msg,
          });
        }

        if (result.success === false) {
          dispatch({
            type: CREATE_PROFILE_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: CREATE_PROFILE_FAIL,
          payload: error.response,
        });
      });

  } catch (error) {
    dispatch({
      type: CREATE_PROFILE_FAIL,
      payload: error.response.data.error,
    });
  }
};


// Edit individual profile
export const editIndividualProfile = (id, profileData) => async (dispatch) => {
    try {
      dispatch({ type: EDIT_PROFILE_REQUEST });
  
      const CustomHeader = new Headers();
      CustomHeader.append("Content-Type", "application/json");
      CustomHeader.append(
        "ez_token",
        JSON.parse(localStorage.getItem("auth_token"))
      );
  
      const config = {
        method: "PUT",
        headers: CustomHeader,
        body: JSON.stringify(profileData),
        redirect: "follow",
      };
  
      const response = await fetch(`${MAIN_URI}/profiles/${id}`, config);
      const result = await response.json();
  
      if (result.success === true) {
        dispatch({
          type: EDIT_PROFILE_SUCCESS,
          payload: result.msg,
        });
      } else {
        dispatch({
          type: EDIT_PROFILE_FAIL,
          payload: result.error,
        });
      }
    } catch (error) {
      dispatch({
        type: EDIT_PROFILE_FAIL,
        payload: error.response,
      });
    }
  };
  
  // Delete individual profile
  export const deleteIndividualProfile = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PROFILE_REQUEST });
  
      const CustomHeader = new Headers();
      CustomHeader.append(
        "ez_token",
        JSON.parse(localStorage.getItem("auth_token"))
      );
  
      const config = {
        method: "DELETE",
        headers: CustomHeader,
        redirect: "follow",
      };
  
      const response = await fetch(`${MAIN_URI}/profiles/${id}`, config);
      const result = await response.json();

      if (result.success === true) {
        dispatch({ type: DELETE_PROFILE_SUCCESS });
      } else {
        dispatch({
          type: DELETE_PROFILE_FAIL,
          payload: result.error,
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_PROFILE_FAIL,
        payload: error.response,
      });
    }
  };

// Get individual profile by ID
export const getIndividualProfileById = () => async (dispatch) => {
    try {
      dispatch({ type: GET_PROFILE_REQUEST });

      const CustomHeader = new Headers();
      CustomHeader.append(
        "ez_token",
        JSON.parse(localStorage.getItem("auth_token"))
      );
  
      const config = {
        method: "GET",
        headers: CustomHeader,
        redirect: "follow",
      };

      fetch(`${MAIN_URI}/profiles/6486b2448c15464c8478231d`, config)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result,"res");
        if (result.success === true) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );

          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: decryptedData,
          });
        }

        if (result.success === false) {
          dispatch({
            type: GET_PROFILE_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_PROFILE_FAIL,
          payload: error,
        });
      });
       
    } catch (error) {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: error.response,
      });
    }
  };


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
