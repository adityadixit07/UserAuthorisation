import {
  SELLER_REGISTER_REQUEST,
  SELLER_REGISTER_SUCCESS,
  SELLER_REGISTER_FAIL,
  CLEAR_SELLER_ERRORS,

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
  CREATE_CATELOGUE_REQUEST,
  CREATE_CATELOGUE_SUCCESS,
  CREATE_CATELOGUE_FAIL,

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

  CLEAR_CATALOG_SUCCESS,
} from "../constants/sellerConstants";

export const initialSellerState = {
  isLoading: false,
  isSellerRegistered: false,
  sellerRegisterMessage: null,
  sellerRegisterError: null,
  catalogueCreationError: null,
  catalogueCreationMsg: {
    success: null,
    msg: null
  },
  isFetchingCatalog: true,
  catalogs: null,
  catalog: null,
  catalogError: null,
  isFetchingBookings: true,
  bookings: null,
  bookingsError: null,
  isAvailabiltyUpdating: false,
};

const sellerReducer = (state = initialSellerState, action) => {
  switch (action.type) {
    case SELLER_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SELLER_REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSellerRegistered: true,
        sellerRegisterMessage: action.payload,
      };
    }
    case SELLER_REGISTER_FAIL: {
      return {
        ...state,
        isLoading: false,
        isSellerRegistered: false,
        sellerRegisterError: action.payload,
      };
    }
    // create catalogue
    case CREATE_CATELOGUE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CREATE_CATELOGUE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        catalogueCreationMsg: action.payload,
      };
    }
    case CREATE_CATELOGUE_FAIL: {
      return {
        ...state,
        isLoading: false,
        catalogueCreationError: action.payload,
      };
    }
    case CLEAR_CATALOG_SUCCESS: {
      return {
        ...state,
        catalogueCreationMsg: {
          catalogueCreationMsg: {
            success: null,
            msg: null
          },
        }
      }
    }

    case SELLER_CATALOG_REQUEST:
      return {
        ...state,
        isFetchingCatalog: true,
      };
    case SELLER_CATALOG_SUCCESS:
      return {
        ...state,
        catalogs: action.payload,
        isFetchingCatalog: false,
      };
    case SELLER_CATALOG_FAIL:
      return {
        ...state,
        isFetchingCatalog: false,
        catalogError: action.payload,
      };

    case INDIVIDUAL_CATALOG_REQUEST:
      return {
        ...state,
        isFetchingCatalog: true,
      };
    case INDIVIDUAL_CATALOG_SUCCESS:
      return {
        ...state,
        isFetchingCatalog: false,
        catalog: action.payload,
      };
    case INDIVIDUAL_CATALOG_FAIL:
      return {
        ...state,
        isFetchingCatalog: false,
        catalogError: action.payload,
      };

    case FETCH_BOOKINGS_REQUEST:
      return {
        ...state,
        isFetchingBookings: true,
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        isFetchingBookings: false,
        bookings: action.payload,
      };
    case FETCH_BOOKINGS_FAIL:
      return {
        ...state,
        isFetchingBookings: false,
        bookingsError: action.payload,
      };

    case SET_AVAILABILITY_REQUEST:
      return {
        ...state,
        isAvailabiltyUpdating: true,
      };
    case SET_AVAILABILITY_SUCCESS:
      return {
        ...state,
        isAvailabiltyUpdating: false,
      };
    case SET_AVAILABILITY_FAIL:
      return {
        ...state,
        isAvailabiltyUpdating: false,
      };

    case CLEAR_SELLER_ERRORS:
      return {
        ...state,
        sellerRegisterMessage: null,
        sellerRegisterError: null,
        catalogueCreationError: null,
        catalogueCreationMsg: null,
        bookingsError: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sellerReducer;
