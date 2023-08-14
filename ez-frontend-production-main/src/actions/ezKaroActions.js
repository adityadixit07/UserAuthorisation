import {
  EZ_KARO_FORM_REQUEST,
  EZ_KARO_FORM_SUCCESS,
  EZ_KARO_FORM_FAIL,
  GET_EZ_KARO_FORM_REQUEST,
  GET_EZ_KARO_FORM_SUCCESS,
  GET_EZ_KARO_FORM_FAIL,
  CLEAR_EZ_ERRORS,
  CLEAR_PREVIOUS_STATE,
  GET_EZ_JOB_ROLES,
  GET_EZ_JOB_SKILLS,
  GET_EZ_COMPANIES,
  GET_EZ_CATEGORIES,
} from "../constants/ezKaroConstants.js";

import { MAIN_URI } from "../services/helper.js";

// const SECRET_KEY = "THIS_IS_THE_SECRET_KEY_FOR_EZ_KARO_THE_ONE_APP";

export const createEzKaroForm = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: EZ_KARO_FORM_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(formData),
      redirect: "follow",
    };

    // console.log(MAIN_URI);

    fetch(`${MAIN_URI}/ezform/new`, config)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.success === true) {
          dispatch({
            type: EZ_KARO_FORM_SUCCESS,
            payload: result.msg,
          });
        }

        if (result.success === false) {
          dispatch({
            type: EZ_KARO_FORM_FAIL,
            payload: result.msg,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: EZ_KARO_FORM_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: EZ_KARO_FORM_FAIL,
      payload: error,
    });
  }
};

export const getAllezKaroForms = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_EZ_KARO_FORM_REQUEST,
    });

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

    fetch(`${MAIN_URI}/ezform/all_form_data`, config)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.success === true) {
          dispatch({
            type: GET_EZ_KARO_FORM_SUCCESS,
            payload: result.ezKaroFormData,
            totalForms: result.totalForms,
          });
        }

        if (result.success === false) {
          dispatch({
            type: GET_EZ_KARO_FORM_FAIL,
            payload: result.msg,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_EZ_KARO_FORM_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: GET_EZ_KARO_FORM_FAIL,
      payload: error,
    });
  }
};

export const getEzJobRoles = () => async (dispatch) => {
  try {
    const CustomHeader = new Headers();
    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/ezjobRoles/list`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: GET_EZ_JOB_ROLES,
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getEzJobSkills = () => async (dispatch) => {
  try {
    const CustomHeader = new Headers();
    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/ezskills/list`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: GET_EZ_JOB_SKILLS,
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getEzCompanies = () => async (dispatch) => {
  try {
    const CustomHeader = new Headers();
    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/ezcompany/list`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: GET_EZ_COMPANIES,
            payload: result.companies,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getEzCategories = () => async (dispatch) => {
  try {
    const CustomHeader = new Headers();
    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/ezcategory/list`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: GET_EZ_CATEGORIES,
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const clearPreviousState = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PREVIOUS_STATE,
  });
};

export const clearEzErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_EZ_ERRORS,
  });
};
