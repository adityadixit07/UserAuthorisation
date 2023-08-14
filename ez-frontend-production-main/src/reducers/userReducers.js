import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  CLEAR_ERRORS,
  EMAIL_VERIFY_REQUEST,
  EMAIL_VERIFY_SUCCESS,
  EMAIL_VERIFY_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  EMAIL_OTP_REQUEST,
  EMAIL_OTP_SUCCESS,
  EMAIL_OTP_FAIL,
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAIL,
  PHONE_VERIFY_REQUEST,
  PHONE_VERIFY_SUCCESS,
  PHONE_VERIFY_FAIL,
  PHONE_OTP_REQUEST,
  PHONE_OTP_SUCCESS,
  PHONE_OTP_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
  FETCH_PROFILE_REQUEST,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAIL,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  RESET_PURCHASE,
  CLEAR_PROFILE_UPDATE,
  PHOTO_UPLOAD_REQUEST,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_UPLOAD_FAIL,
  NEW_USER_STORE,
  NEW_USER_REMOVE,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST
} from "../constants/userConstants.js";

export const initialUserstate = {
  isNewUser: false,
  isFetchingProfile: true,
  profile: null,
  isLoading: false,
  isLoggedIn: false,
  isAuthenticated: false,
  user: null,
  isEmailVerifying: false,
  isEmailVerified: false,
  isPhoneVerifying: false,
  isPhoneVerified: false,
  isOTPVerifying: false,
  isOTPVerified: false,
  isProfileUpdating: false,
  isProfileUpdated: false,
  profileUpdate: null,
  error: null,
  isUploading: false,
  isUploaded: false,
  isPurchasing: false,
  isPurchased: false,
  isFetchingOrders: true,
  isUsersFetched: false,
  users: null,
  orders: null,
  isLoggedOut: false,
  error404: false,
};

const userReducer = (state = initialUserstate, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        isFetchingProfile: true,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isFetchingProfile: false,
      };
    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        isFetchingProfile: false,
        error: action.payload,
        error404: true,
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }

    case USER_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case USER_LOAD_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
        userLoadError: action.payload,
      };

    case PHOTO_UPLOAD_REQUEST:
      return {
        ...state,
        isUploading: true,
        isUploaded: false,
      }
    case PHOTO_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploading: false,
        isUploaded: true,
      }
    case PHOTO_UPLOAD_FAIL:
      return {
        ...state,
        isUploading: false,
        isUploaded: false,
      }

    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case NEW_USER_STORE:
      return {
        ...state,
        isNewUser: true,
      };
    case NEW_USER_REMOVE:
      return {
        ...state,
        isNewUser: false,
      };

    case "USER_EXIST_REQUEST":
      return {
        ...state,
        isExist: true,
      };
    case "USER_EXIST_SUCCESS":
      return {
        ...state,
        isExist: false,
      };
    case "USER_EXIST_FAIL":
      return {
        ...state,
        isExist: true,
        error: action.payload,
      };

    case PURCHASE_REQUEST:
      return {
        ...state,
        isPurchasing: true,
      };
    case PURCHASE_SUCCESS:
      return {
        ...state,
        isPurchasing: false,
        isPurchased: true,
      };
    case PURCHASE_FAIL:
      return {
        ...state,
        isPurchasing: false,
        isPurchased: false,
      };
    case RESET_PURCHASE:
      return {
        ...state,
        isPurchasing: false,
        isPurchased: false,
      }

    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        isFetchingOrders: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetchingOrders: false,
        orders: action.payload,
      };
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        isFetchingOrders: false,
      };

    case EMAIL_VERIFY_REQUEST:
      return { ...state, isOTPSent: false, isLoading: true };
    case EMAIL_VERIFY_SUCCESS:
      return {
        ...state,
        isOTPSent: true,
        isLoading: false,
      };
    case EMAIL_VERIFY_FAIL:
      return {
        ...state,
        isOTPSent: false,
        isLoading: false,
        error: action.payload,
      };

    case EMAIL_OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EMAIL_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUpdated: true,
      };
    case EMAIL_OTP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case CHECK_EMAIL_REQUEST:
      return {
        ...state,
        isEmailVerifying: true,
        isEmailVerified: false,
      };
    case CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        isEmailVerifying: false,
        isEmailVerified: true,
      };
    case CHECK_EMAIL_FAIL:
      return {
        ...state,
        isEmailVerifying: false,
        isEmailVerified: false,
      };

    case PHONE_VERIFY_REQUEST:
      return {
        ...state,
        isPhoneVerifying: true,
        isPhoneVerified: false,
      };
    case PHONE_VERIFY_SUCCESS:
      return {
        ...state,
        isPhoneVerifying: false,
        isPhoneVerified: true,
      };
    case PHONE_VERIFY_FAIL:
      return {
        ...state,
        isPhoneVerifying: false,
        isPhoneVerified: false,
      };

    case PHONE_OTP_REQUEST:
      return {
        ...state,
        isOTPVerifying: true,
        isOTPVerified: false,
      };
    case PHONE_OTP_SUCCESS:
      return {
        ...state,
        isOTPVerifying: false,
        isOTPVerified: true,
      };
    case PHONE_OTP_FAIL:
      return {
        ...state,
        isOTPVerifying: false,
        isOTPVerified: false,
      };

    case USER_UPDATE_REQUEST:
      return {
        ...state,
        isProfileUpdating: true,
        isProfileUpdated: false,
      }
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        isProfileUpdating: false,
        profileUpdate: action.payload,
        isProfileUpdated: true,
      }
    case USER_UPDATE_FAIL:
      return {
        ...state,
        isProfileUpdating: false,
        isProfileUpdated: false,
      }

    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...initialUserstate,
        message: action.payload,
        isLoggedOut: true,
      };
    case USER_LOGOUT_FAIL:
      return {
        ...state, // to keep the previous state
        isLoading: false, // to stop the loading spinn
        error: action.payload,
        isLoggedOut: false,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: action.payload,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: action.payload,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "CLEAR_EXIST_ERRORS":

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isUsersFetched: false,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isUsersFetched: true,
        users: action.payload,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        isUsersFetched: false,
      }

    case CLEAR_PROFILE_UPDATE:
      return {
        ...state,
        isProfileUpdated: false,
        profileUpdate: null
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        isLoggedOut: false,
        message: null,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
