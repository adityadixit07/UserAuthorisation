import { toast } from "react-hot-toast";
import crypto from "crypto-js";
import {
  SELLER_REGISTER_REQUEST,
  SELLER_REGISTER_SUCCESS,
  SELLER_REGISTER_FAIL,
  CLEAR_SELLER_ERRORS,
  CREATE_CATELOGUE_REQUEST,
  CREATE_CATELOGUE_SUCCESS,
  CREATE_CATELOGUE_FAIL,
  CLEAR_CATALOG_SUCCESS,

  // CREATE_SELLER_REQUEST,
  // CREATE_SELLER_SUCCESS,
  // CREATE_SELLER_FAIL,

  // ALL_SERVICES_LOAD_REQUEST,
  // ALL_SERVICES_LOAD_SUCCESS,
  // ALL_SERVICES_LOAD_FAIL,

  // ONE_SERVICE_LOAD_REQUEST,
  // ONE_SERVICE_LOAD_SUCCESS,
  // ONE_SERVICE_LOAD_FAIL,

  // SERVICE_TYPE_LOAD_REQUEST,
  // SERVICE_TYPE_LOAD_SUCCESS,
  // SERVICE_TYPE_LOAD_FAIL,

  // SELLER_PROFILE_REQUEST,
  // SELLER_PROFILE_SUCCESS,
  // SELLER_PROFILE_FAIL,

  SELLER_CATALOG_REQUEST,
  SELLER_CATALOG_SUCCESS,
  SELLER_CATALOG_FAIL,
  INDIVIDUAL_CATALOG_REQUEST,
  INDIVIDUAL_CATALOG_SUCCESS,
  INDIVIDUAL_CATALOG_FAIL,
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAIL,
  SET_AVAILABILITY_REQUEST,
  SET_AVAILABILITY_SUCCESS,
  SET_AVAILABILITY_FAIL,
} from "../constants/sellerConstants";

// import axis from "axios";
import { MAIN_URI } from "../services/helper";

const SECRET_KEY = "THIS_IS_THE_SECRET_KEY_FOR_EZ_KARO_THE_ONE_APP";

// seller REGISTER
export const registerSeller = (sellerdata) => async (dispatch) => {
  try {
    dispatch({
      type: SELLER_REGISTER_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append(
      "ez_token",
      JSON.parse(localStorage.getItem("auth_token"))
    );

    // console.log(sellerdata);

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(sellerdata),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/seller/register`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: SELLER_REGISTER_SUCCESS,
            payload: result.msg,
          });
        }

        if (result.success === false) {
          dispatch({
            type: SELLER_REGISTER_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SELLER_REGISTER_FAIL,
          payload: error.response,
        });
      });
  } catch (error) {
    dispatch({
      type: SELLER_REGISTER_FAIL,
      payload: error.response,
    });
  }
};

export const createSellerCatalog = (catalogData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CATELOGUE_REQUEST,
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
      body: JSON.stringify(catalogData),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/seller/createcatalog`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: CREATE_CATELOGUE_SUCCESS,
            payload: result,
          });
          toast.success(result.msg);
        }

        if (result.success === false) {
          dispatch({
            type: CREATE_CATELOGUE_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: CREATE_CATELOGUE_FAIL,
          payload: error.response,
        });
      });
  } catch (error) {
    dispatch({
      type: CREATE_CATELOGUE_FAIL,
      payload: error.response,
    });
  }
};

export const createSellerCatalogWithImage = ({ thumbnail, cover, catalogData }) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CATELOGUE_REQUEST,
    });

    const formData = new FormData();
    formData.append('catalogData', JSON.stringify(catalogData));
    formData.append('thumbnail', thumbnail);
    if (cover) {
      formData.append('cover', cover);
    }

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

    fetch(`${MAIN_URI}/seller/createcatalog-withimage`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: CREATE_CATELOGUE_SUCCESS,
            payload: result,
          });
          toast.success(result.msg);
        }

        if (result.success === false) {
          dispatch({
            type: CREATE_CATELOGUE_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: CREATE_CATELOGUE_FAIL,
          payload: error.response,
        });
      });
  } catch (error) {
    dispatch({
      type: CREATE_CATELOGUE_FAIL,
      payload: error.response,
    });
  }
};

export const getSellerCatalogByID = ({ catalogID }) => async (dispatch) => {
  try {
    dispatch({
      type: INDIVIDUAL_CATALOG_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/seller/catalog/${catalogID}`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );
          dispatch({
            type: INDIVIDUAL_CATALOG_SUCCESS,
            payload: decryptedData,
          });
        }

        if (!result.success) {
          dispatch({
            type: INDIVIDUAL_CATALOG_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: INDIVIDUAL_CATALOG_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: INDIVIDUAL_CATALOG_FAIL,
      payload: error,
    });
  }
};

export const getSellerCatalog = ({ username }) => async (dispatch) => {
  try {
    dispatch({
      type: SELLER_CATALOG_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");

    const config = {
      method: "GET",
      headers: CustomHeader,
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/seller/services/${username}`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );
          dispatch({
            type: SELLER_CATALOG_SUCCESS,
            payload: decryptedData,
          });
        }

        if (!result.success) {
          dispatch({
            type: SELLER_CATALOG_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SELLER_CATALOG_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: SELLER_CATALOG_FAIL,
      payload: error,
    });
  }
};

export const getBookings = (sellerDetail) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_BOOKINGS_REQUEST,
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
      body: JSON.stringify(sellerDetail),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/bookings/seller`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const decryptedData = JSON.parse(
            crypto.AES.decrypt(result.data, SECRET_KEY).toString(
              crypto.enc.Utf8
            )
          );
          dispatch({
            type: FETCH_BOOKINGS_SUCCESS,
            payload: decryptedData,
          });
        }

        if (!result.success) {
          dispatch({
            type: FETCH_BOOKINGS_FAIL,
            payload: result.error,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_BOOKINGS_FAIL,
          payload: error,
        });
      });
  } catch (error) {
    dispatch({
      type: FETCH_BOOKINGS_FAIL,
      payload: error,
    });
  }
};

// export const getBookings = (sellerID) => async (dispatch) => {
//   try {
//     dispatch({
//       type: FETCH_BOOKINGS_REQUEST,
//     });

//     const CustomHeader = new Headers();
//     CustomHeader.append("Content-Type", "application/json");
//     CustomHeader.append(
//       "ez_token",
//       JSON.parse(localStorage.getItem("auth_token"))
//     );

//     const config = {
//       method: "GET",
//       headers: CustomHeader,
//       redirect: "follow",
//     };

//     fetch(`${MAIN_URI}/bookings/${sellerID}`, config)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.success) {
//           const decryptedData = JSON.parse(
//             crypto.AES.decrypt(result.data, SECRET_KEY).toString(
//               crypto.enc.Utf8
//             )
//           );
//           dispatch({
//             type: FETCH_BOOKINGS_SUCCESS,
//             payload: decryptedData,
//           });
//         }

//         if (!result.success) {
//           dispatch({
//             type: FETCH_BOOKINGS_FAIL,
//             payload: result.error,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: FETCH_BOOKINGS_FAIL,
//           payload: error,
//         });
//       });
//   } catch (error) {
//     dispatch({
//       type: FETCH_BOOKINGS_FAIL,
//       payload: error,
//     });
//   }
// };

export const setSellerAvailability = (finalPeriodAvailability) => async (dispatch) => {
  try {
    dispatch({
      type: SET_AVAILABILITY_REQUEST,
    });

    const CustomHeader = new Headers();
    CustomHeader.append("Content-Type", "application/json");
    CustomHeader.append("ez_token", JSON.parse(localStorage.getItem("auth_token")));

    const config = {
      method: "POST",
      headers: CustomHeader,
      body: JSON.stringify(finalPeriodAvailability),
      redirect: "follow",
    };

    fetch(`${MAIN_URI}/seller/availability`, config)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          dispatch({
            type: SET_AVAILABILITY_SUCCESS,
            payload: result,
          });
          toast.success(result.msg);
        }

        if (result.success === false) {
          dispatch({
            type: SET_AVAILABILITY_FAIL,
          });
          toast.error("Error adding slot... Try again!");
        }
      })
      .catch((error) => {
        dispatch({
          type: SET_AVAILABILITY_FAIL,
        });
        toast.error("Error adding slot... Try again!");
      });
  } catch (error) {
    dispatch({
      type: SET_AVAILABILITY_FAIL,
    });
    toast.error("Error adding slot... Try again!");
  }
};

export const clearCreateCatalog = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CATALOG_SUCCESS
  })
};

export const clearSellerError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SELLER_ERRORS,
  });
};
