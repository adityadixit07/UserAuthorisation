import { toast } from "react-hot-toast";
import {
    BOOK_SESSION_REQUEST,
    BOOK_SESSION_SUCCESS,
    BOOK_SESSION_FAIL,
    BOOK_SESSION_RESET
} from "../constants/calendarConstants";

import { MAIN_URI } from "../services/helper";

export const bookSession = (sessionData) => async (dispatch) => {
    try {
        dispatch({
            type: BOOK_SESSION_REQUEST,
        });

        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");

        const config = {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify(sessionData),
            redirect: "follow",
        };

        fetch(`${MAIN_URI}/book-session`, config)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === true) {
                    dispatch({
                        type: BOOK_SESSION_SUCCESS,
                    });
                    toast.success("Appointment booked successfully!");
                }

                if (result.success === false) {
                    dispatch({
                        type: BOOK_SESSION_FAIL,
                        payload: result.error,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: BOOK_SESSION_FAIL,
                    payload: error,
                });
            });
    } catch (error) {
        dispatch({
            type: BOOK_SESSION_FAIL,
            payload: error,
        });
    }
};

export const clearSession = () => async (dispatch) => {
    dispatch({
        type: BOOK_SESSION_RESET
    })
};