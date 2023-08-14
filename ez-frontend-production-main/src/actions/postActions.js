import crypto from "crypto-js";
import {
    COMMENT_REQUEST,
    COMMENT_SUCCESS,
    COMMENT_FAIL,
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAIL,
    CLEAR_COMMENT,
    ADD_UPVOTE_SUCCESS,
    ADD_UPVOTE_REQUEST,
    ADD_UPVOTE_FAIL,
    REMOVE_UPVOTE_REQUEST,
    REMOVE_UPVOTE_SUCCESS,
    REMOVE_UPVOTE_FAIL
} from "../constants/postConstants";
import { MAIN_URI } from "../services/helper.js";
import { toast } from "react-hot-toast";

const SECRET_KEY = "THIS_IS_THE_SECRET_KEY_FOR_EZ_KARO_THE_ONE_APP";

export const getPost = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_REQUEST,
        });

        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");
        CustomHeader.append("ez_token", JSON.parse(localStorage.getItem("auth_token")));

        const config = {
            method: "GET",
            headers: CustomHeader,
            redirect: "follow",
        };

        fetch(`${MAIN_URI}/startup/post`, config)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === true) {
                    const decryptedData = JSON.parse(
                        crypto.AES.decrypt(result.data, SECRET_KEY).toString(crypto.enc.Utf8)
                    );

                    dispatch({
                        type: POST_SUCCESS,
                        payload: decryptedData
                    });
                }

                if (result.success === false) {
                    dispatch({
                        type: POST_FAIL,
                    });
                    toast.error(result.message);
                }
            })
            .catch((error) => {
                dispatch({
                    type: POST_FAIL,
                });
                toast.error(error.message);
            });
    }
    catch (error) {
        dispatch({
            type: POST_FAIL,
        });
        toast.error(error.message);
    }
};

export const addComment = (commentData) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_REQUEST,
        });

        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");
        CustomHeader.append("ez_token", JSON.parse(localStorage.getItem("auth_token")));

        const config = {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify(commentData),
            redirect: "follow",
        };

        fetch(`${MAIN_URI}/startup/comment`, config)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === true) {
                    dispatch({
                        type: COMMENT_SUCCESS,
                        payload: commentData
                    });
                    toast.success(result.message);
                }

                if (result.success === false) {
                    dispatch({
                        type: COMMENT_FAIL,
                    });
                    toast.error(result.message);
                }
            })
            .catch((error) => {
                dispatch({
                    type: COMMENT_FAIL,
                });
                toast.error(error.message);
            });
    }
    catch (error) {
        dispatch({
            type: COMMENT_FAIL,
        });
        toast.error(error.message);
    }
};

export const upvotePost = (upvoteData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_UPVOTE_REQUEST,
        });

        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");
        CustomHeader.append("ez_token", JSON.parse(localStorage.getItem("auth_token")));

        const config = {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify(upvoteData),
            redirect: "follow",
        };

        fetch(`${MAIN_URI}/startup/upvote`, config)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === true) {
                    dispatch({
                        type: ADD_UPVOTE_SUCCESS,
                    });
                    toast.success(result.message);
                }

                if (result.success === false) {
                    dispatch({
                        type: ADD_UPVOTE_FAIL,
                    });
                    toast.error("Please try again later!");
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_UPVOTE_FAIL,
                });
                toast.error("Please try again later!");
            });
    }
    catch (error) {
        dispatch({
            type: ADD_UPVOTE_FAIL,
        });
        toast.error("Please try again later!");
    }
};

export const removeUpvotePost = (upvoteData) => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_UPVOTE_REQUEST,
        });

        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");
        CustomHeader.append("ez_token", JSON.parse(localStorage.getItem("auth_token")));

        const config = {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify(upvoteData),
            redirect: "follow",
        };

        fetch(`${MAIN_URI}/startup/remove-upvote`, config)
            .then((response) => response.json())
            .then((result) => {
                if (result.success === true) {
                    dispatch({
                        type: REMOVE_UPVOTE_SUCCESS,
                    });
                    toast.success(result.message);
                }

                if (result.success === false) {
                    dispatch({
                        type: REMOVE_UPVOTE_FAIL,
                    });
                    toast.error("Please try again later!");
                }
            })
            .catch((error) => {
                dispatch({
                    type: REMOVE_UPVOTE_FAIL,
                });
                toast.error("Please try again later!");
            });
    }
    catch (error) {
        dispatch({
            type: REMOVE_UPVOTE_FAIL,
        });
        toast.error("Please try again later!");
    }
};

export const clearComment = () => async (dispatch) => {
    dispatch({
        type: CLEAR_COMMENT,
    });
};