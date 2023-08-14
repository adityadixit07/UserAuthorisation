import {
  EZ_KARO_FORM_REQUEST,
  EZ_KARO_FORM_SUCCESS,
  EZ_KARO_FORM_FAIL,
  GET_EZ_KARO_FORM_REQUEST,
  GET_EZ_KARO_FORM_SUCCESS,
  GET_EZ_KARO_FORM_FAIL,
  GET_EZ_JOB_ROLES,
  CLEAR_PREVIOUS_STATE,
  CLEAR_EZ_ERRORS,
  GET_EZ_JOB_SKILLS,
  GET_EZ_COMPANIES,
  GET_EZ_CATEGORIES,
} from "../constants/ezKaroConstants.js";

export const initialEzKaroState = {
  loading: false,
  formSubmittedMessage: null,
  formSubmittedError: null,
  allFormsData: null,
  allFormsDataError: null,
  totalForms: null,
  fetchedJob: false,
  jobRoles: null,
  fetchedSkills: false,
  jobSkills: null,
  fetchedCompanies: false,
  companies: null,
  fetchedCategories: false,
  categories: null,
};

const ezKaroReducer = (state = initialEzKaroState, action) => {
  switch (action.type) {
    // Create form
    case EZ_KARO_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EZ_KARO_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        formSubmittedMessage: action.payload,
        isFormSubmitted: true,
      };
    case EZ_KARO_FORM_FAIL:
      return {
        ...state,
        loading: false,
        formSubmittedError: action.payload,
        isFormSubmitted: false,
      };

    // Get form
    case GET_EZ_KARO_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EZ_KARO_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        allFormsData: action.payload,
        totalForms: action.totalForms,
      };
    case GET_EZ_KARO_FORM_FAIL:
      return {
        ...state,
        loading: false,
        allFormsDataError: action.payload,
      };
    case GET_EZ_JOB_ROLES:
      return {
        ...state,
        fetchedJob: true,
        jobRoles: action.payload,
      };
    case GET_EZ_JOB_SKILLS:
      return {
        ...state,
        fetchedSkills: true,
        jobSkills: action.payload,
      };
    case GET_EZ_COMPANIES:
      return {
        ...state,
        fetchedCompanies: true,
        companies: action.payload,
      };
    case GET_EZ_CATEGORIES:
      return {
        ...state,
        fetchedCategories: true,
        categories: action.payload,
      };
    case CLEAR_PREVIOUS_STATE:
      return {
        ...state,
        loading: false,
        formSubmittedMessage: null,
        formSubmittedError: null,
        allFormsDataError: null,
      };
    case CLEAR_EZ_ERRORS:
      return {
        formSubmittedMessage: null,
        formSubmittedError: null,
        allFormsDataError: null,
      };
    default:
      return state;
  }
};

export default ezKaroReducer;
