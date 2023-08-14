import crypto from "crypto-js";
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
  EMAIL_OTP_FAIL,
  EMAIL_OTP_SUCCESS,
  PHONE_VERIFY_REQUEST,
  PHONE_VERIFY_SUCCESS,
  PHONE_VERIFY_FAIL,
  PHONE_OTP_REQUEST,
  PHONE_OTP_SUCCESS,
  PHONE_OTP_FAIL,
  // USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
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
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAIL,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../constants/userConstants.js";

import axios from "axios";

import { MAIN_URI } from "../services/helper.js";
import { toast } from "react-hot-toast";

const SECRET_KEY = "THIS_IS_THE_SECRET_KEY_FOR_EZ_KARO_THE_ONE_APP";

// user already exist
export const userAlreadyExist = (phone) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_EXIST_REQUEST",
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify({ phone }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/checkuser`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: "USER_EXIST_SUCCESS",
            payload: result.msg,
          });
        }
        if (result.success === false) {
          dispatch({
            type: "USER_EXIST_FAIL",
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "USER_EXIST_FAIL",
          payload: error.response,
        });
      });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: "USER_EXIST_FAIL",
      payload: error.response,
    });
  }
};


export const clearUserExist = () => async (dispatch) => {
  dispatch({ type: "CLEAR_EXIST_ERRORS" });
};


// user login
export const userLogin = (validID, password, setLoginLoading, remember) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    setLoginLoading(true);
    localStorage.setItem("remember", remember);

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify({ validID, password }),
      redirect: "follow",
    };

    // console.log(MAIN_URI);

    fetch(`${MAIN_URI}/login`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: USER_LOGIN_SUCCESS,
          });
          toast.success(result.msg || result.message);
          localStorage.setItem("auth_token", JSON.stringify(result.auth_token));
          setLoginLoading(false);
        }

        if (result.success === false) {
          dispatch({
            type: USER_LOGIN_FAIL,
          });
          toast.error(result.error);
          setLoginLoading(false);
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_FAIL,
        });
        setLoginLoading(false);
      });

    //console.log(data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
    setLoginLoading(false);
  }
};

// load authenticated user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOAD_REQUEST,
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

    // console.log(MAIN_URI);

    fetch(`${MAIN_URI}/profile/me`, config)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.success === true) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );

          dispatch({
            type: USER_LOAD_SUCCESS,
            payload: decryptedData,
          });
        }

        if (result.success === false) {
          dispatch({
            type: USER_LOAD_FAIL,
            payload: result.error,
          });
          localStorage.removeItem("auth_token");
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_LOAD_FAIL,
          payload: error,
        });
        localStorage.removeItem("auth_token");
      });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error,
    });
    localStorage.removeItem("auth_token");
  }
};

// user register
export const userRegister = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(userData),
      redirect: "follow",
    };

    // console.log(MAIN_URI);auth_token

    fetch(`${MAIN_URI}/register`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          localStorage.setItem("auth_token", JSON.stringify(result.auth_token));

          dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: result.msg,
          });
        }

        if (result.success === false) {
          dispatch({
            type: USER_REGISTER_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: error.response,
        });
      });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response,
    });
  }
};

// Setting isNewUser -> True
export const setNewUser = () => async (dispatch) => {
  dispatch({ type: NEW_USER_STORE });
};
// Setting isNewUser -> False
export const removeNewUser = () => async (dispatch) => {
  dispatch({ type: NEW_USER_REMOVE });
};

// verify Email
export const verifyEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: EMAIL_VERIFY_REQUEST,
    });

    const { data } = await axios.post(
      `${MAIN_URI}/api/v1/email/verification`,
      email,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: EMAIL_VERIFY_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: EMAIL_VERIFY_FAIL,
      payload: error.response.data.error,
    });
  }
};

// confirm Email
export const confirmEmail = (OTP, email) => async (dispatch) => {
  try {
    dispatch({
      type: EMAIL_OTP_REQUEST,
    });
    const emailOTP = OTP;
    const { data } = await axios.put(
      `${MAIN_URI}/api/v1/email/confirmemail`,
      { emailOTP, email },
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: EMAIL_OTP_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: EMAIL_OTP_FAIL,
    });
  }
};

// check Email (from Dashboard)
export const checkEmailAndUpdate = (email) => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_EMAIL_REQUEST,
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
      body: JSON.stringify({ email }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/email/checkandupdate`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          dispatch({
            type: CHECK_EMAIL_SUCCESS,
          });
        }

        if (!result.success) {
          dispatch({
            type: CHECK_EMAIL_FAIL,
          });
          toast.error(result.message);
        }
      })
      .catch((error) => {
        dispatch({
          type: CHECK_EMAIL_FAIL,
        });
        toast.error(error.message);
      });
  } catch (error) {
    dispatch({
      type: CHECK_EMAIL_FAIL,
    });
    toast.error(error.message);
  }
};

// verify Phone (from Dashboard)
export const verifyPhone = (countryCode, rawPhone, setOpenOTP) => async (dispatch) => {
  try {
    dispatch({
      type: PHONE_VERIFY_REQUEST,
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
      body: JSON.stringify({ countryCode, rawPhone }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/phone/verification`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          dispatch({
            type: PHONE_VERIFY_SUCCESS,
          });
          setOpenOTP(true);
        }

        if (!result.success) {
          dispatch({
            type: PHONE_VERIFY_FAIL,
          });
          toast.error(result.message);
        }
      })
      .catch((error) => {
        dispatch({
          type: PHONE_VERIFY_FAIL,
        });
        toast.error(error.message);
      });
  } catch (error) {
    dispatch({
      type: PHONE_VERIFY_FAIL,
    });
    toast.error(error.message);
  }
};

// confirm Phone (from Dashboard)
export const confirmPhone = (phoneOTP, rawPhone) => async (dispatch) => {
  try {
    dispatch({
      type: PHONE_OTP_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );

    const config = {
      method: "PUT",
      headers: CustomHeader,
      body: JSON.stringify({ phoneOTP, rawPhone }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/phone/confirmphone`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          dispatch({
            type: PHONE_OTP_SUCCESS,
          });
        }

        if (!result.success) {
          dispatch({
            type: PHONE_OTP_FAIL,
          });
          toast.error(result.message);
        }
      })
      .catch((error) => {
        dispatch({
          type: PHONE_OTP_FAIL,
        });
        toast.error(error.message);
      });
  } catch (error) {
    dispatch({
      type: PHONE_OTP_FAIL,
    });
    toast.error(error.message);
  }
};

// update users
export const updateUserDetails = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    // console.log(userData);
    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );

    const config = {
      method: "PUT",
      headers: CustomHeader,
      body: JSON.stringify(userData),
      redirect: "follow",
    };

    // console.log(MAIN_URI);

    fetch(`${MAIN_URI}/profile/update`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: result,
          });
          toast.success(result.message);
        }
        if (result.success === false) {
          dispatch({
            type: USER_UPDATE_FAIL,
          });
          toast.error(result?.message || result?.error);
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error,
    });
  }
};

// update users
export const updateDetails = (userData, setUpdateState, setDetailState) => async () => {
  try {
    setUpdateState(true);
    setDetailState(false);

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );

    const config = {
      method: "PUT",
      headers: CustomHeader,
      body: JSON.stringify(userData),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/profile/update`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          toast.success(result.message);
          setUpdateState(false);
          setDetailState(true);
        }
        if (result.success === false) {
          toast.error(result?.message || result?.error);
          setUpdateState(false);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong... Try again!");
        setUpdateState(false);
      });
  } catch (error) {
    toast.error("Something went wrong... Try again!");
    setUpdateState(false);
  }
};

export const uploadProfileImage = ({ userID, type, imageFile }) => async (dispatch) => {
  try {
    dispatch({
      type: PHOTO_UPLOAD_REQUEST,
    });

    const formData = new FormData();
    formData.append('id', userID);
    formData.append('type', type);
    formData.append('file', imageFile);

    const CustomHeader = new Headers();
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );
    const config = {
      method: "POST",
      headers: CustomHeader,
      body: formData,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/upload-profile-image`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: PHOTO_UPLOAD_SUCCESS,
          });
          toast.success(`${type === "avatar" ? "Profile" : type === "cover" && "Cover"} photo uploaded successfully!`);
        }
        if (result.success === false) {
          dispatch({
            type: PHOTO_UPLOAD_FAIL,
          });
          toast.error("Something went wrong... Try again later!");
        }
      })
      .catch((error) => {
        dispatch({
          type: PHOTO_UPLOAD_FAIL,
        });
        toast.error("Something went wrong... Try again later!");
      });
  }
  catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
    });
    toast.error("Something went wrong... Try again later!");
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    localStorage.removeItem("remember");
    localStorage.removeItem("auth_token");
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: "Logged Out!",
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      error: error.response,
    });
  }
};

// forgot password
export const forgotPassword = (validID, countryCode) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "PUT",
      headers: CustomHeader,
      body: JSON.stringify({ validID, countryCode }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/forgot/password`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
          toast.success(result?.response || result?.message || result?.error);
        }
        if (result.success === false) {
          dispatch({
            type: FORGOT_PASSWORD_FAIL,
          });
          toast.error(result?.response || result?.message || result?.error);
        }
      })
      .catch((error) => {
        dispatch({
          type: FORGOT_PASSWORD_FAIL,
        });
        toast.error(error?.response || error?.message || error?.error);
      });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
    });
    toast.error(error?.response || error?.message || error?.error);
  }
};

// reset password
export const resetPassword = (password, confirmPassword, token) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });

    // console.log(password);
    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "PUT",
      headers: CustomHeader,
      body: JSON.stringify({ password, confirmPassword }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/reset/password/${token}`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: "Password reset successfully",
          });
        }
        if (result.success === false) {
          dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: "Some unexpected error occured",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FORGOT_PASSWORD_FAIL,
          payload: error.response,
        });
      });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: "Some unexpected error occured",
    });
  }
};

export const fetchProfile = ({ username, profileView }) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PROFILE_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify({
        profile: profileView
      }),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/user/${username}`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );

          dispatch({
            type: FETCH_PROFILE_SUCCESS,
            payload: decryptedData,
          });
        }

        if (result.success === false) {
          dispatch({
            type: FETCH_PROFILE_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROFILE_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error,
    });
  }
};

export const purchaseItem = (itemData) => async (dispatch) => {
  try {
    dispatch({
      type: PURCHASE_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(itemData),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/purchase`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: PURCHASE_SUCCESS,
          });
          toast.success(result.msg);
        }

        if (result.success === false) {
          dispatch({
            type: PURCHASE_FAIL,
          });
          toast.error(result.msg);
        }
      })
      .catch((error) => {
        dispatch({
          type: PURCHASE_FAIL,
          payload: error.msg,
        });
      });
  } catch (error) {
    dispatch({
      type: PURCHASE_FAIL,
      payload: error.msg,
    });
  }
};

export const resetPurchase = () => async (dispatch) => {
  dispatch({ type: RESET_PURCHASE });
};

export const getOrders = (userDetail) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ORDERS_REQUEST,
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
      body: JSON.stringify(userDetail),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/orders/user`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );
          dispatch({
            type: FETCH_ORDERS_SUCCESS,
            payload: decryptedData,
          });
        }

        if (!result.success) {
          dispatch({
            type: FETCH_ORDERS_FAIL,
          });
          toast.error(result.msg);
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ORDERS_FAIL,
        });
        toast.error(error.msg);
      });
  } catch (error) {
    dispatch({
      type: FETCH_ORDERS_FAIL,
    });
    toast.error(error.msg);
  }
};

// Get users of eZ - The One App
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_USERS_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/get-users`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );
          dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: decryptedData,
          });
        }

        if (!result.success) {
          dispatch({
            type: FETCH_USERS_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_USERS_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAIL,
      payload: error,
    });
  }
};

// Clearing Profile Update
export const clearProfileUpdate = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE_UPDATE });
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
