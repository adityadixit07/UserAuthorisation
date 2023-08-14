import {
    BOOK_SESSION_REQUEST,
    BOOK_SESSION_SUCCESS,
    BOOK_SESSION_FAIL,
    BOOK_SESSION_RESET
} from "../constants/calendarConstants";

export const initialSessionState = {
    isBooking: false,
    isBooked: false,
    error: null,
};

const sessionReducer = (state = initialSessionState, action) => {
    switch (action.type) {
        case BOOK_SESSION_REQUEST: {
            return {
                ...state,
                isBooking: true,
            };
        }
        case BOOK_SESSION_SUCCESS: {
            return {
                ...state,
                isBooking: false,
                isBooked: true,
            };
        }
        case BOOK_SESSION_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        case BOOK_SESSION_RESET: {
            return {
                ...state,
                isBooking: false,
                isBooked: false,
                error: null,
            };
        }
        default: return { ...state };
    }
};

export default sessionReducer;