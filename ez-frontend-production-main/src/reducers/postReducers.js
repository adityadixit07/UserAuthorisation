import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAIL,
    COMMENT_REQUEST,
    COMMENT_SUCCESS,
    COMMENT_FAIL,
    CLEAR_COMMENT,
    ADD_UPVOTE_REQUEST,
    ADD_UPVOTE_SUCCESS,
    ADD_UPVOTE_FAIL,
    REMOVE_UPVOTE_REQUEST,
    REMOVE_UPVOTE_SUCCESS,
    REMOVE_UPVOTE_FAIL,
} from "../constants/postConstants.js";

export const initialPostState = {
    postLoaded: false,
    post: null,
    isCommenting: false,
    comment: null,
    isCommented: false,
    isUpvoting: false,
    isUpvoted: false,
    isUpvotedRemoved: false,
};

const postReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                postLoaded: false,
            };
        case POST_SUCCESS:
            return {
                ...state,
                postLoaded: true,
                post: action.payload,
            };
        case POST_FAIL:
            return {
                ...state,
                postLoaded: false,
            };

        case COMMENT_REQUEST:
            return {
                ...state,
                isCommenting: true,
                comment: null,
                isCommented: false,
            };
        case COMMENT_SUCCESS:
            return {
                ...state,
                isCommenting: false,
                comment: action.payload,
                isCommented: true,
            };
        case COMMENT_FAIL:
            return {
                ...state,
                isCommenting: false,
                isCommented: false,
            };
        case CLEAR_COMMENT:
            return {
                ...state,
                isCommenting: false,
                comment: null,
                isCommented: false
            }

        case ADD_UPVOTE_REQUEST:
            return {
                ...state,
                isUpvoting: true,
            };
        case ADD_UPVOTE_SUCCESS:
            return {
                ...state,
                isUpvoting: false,
                isUpvoted: true,
                isUpvotedRemoved: false,
            };
        case ADD_UPVOTE_FAIL:
            return {
                ...state,
                isUpvoting: false,
            };


        case REMOVE_UPVOTE_REQUEST:
            return {
                ...state,
                isUpvoting: true,
            };
        case REMOVE_UPVOTE_SUCCESS:
            return {
                ...state,
                isUpvoting: false,
                isUpvotedRemoved: true,
                isUpvoted: false,
            };
        case REMOVE_UPVOTE_FAIL:
            return {
                ...state,
                isUpvoting: false,
            };

        default:
            return {
                ...state,
            };
    }
}

export default postReducer;