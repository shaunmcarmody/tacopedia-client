import {
    DELETE_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_REQUEST,
    DELETE_BOOKMARK_SUCCESS,
    GET_BOOKMARK_FAILURE,
    GET_BOOKMARK_REQUEST,
    GET_BOOKMARK_SUCCESS,
    GET_LOCATION_FAILURE,
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
    POST_BOOKMARK_FAILURE,
    POST_BOOKMARK_REQUEST,
    POST_BOOKMARK_SUCCESS,
    GET_REVIEWS_FAILURE,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    POST_LOGIN_FAILURE,
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_SIGNUP_FAILURE,
    POST_SIGNUP_REQUEST,
    POST_SIGNUP_SUCCESS,
    UPDATE_BOOKMARKS_FAILURE,
    UPDATE_BOOKMARKS_REQUEST,
    UPDATE_BOOKMARKS_SUCCESS,
} from '../actions';

const initialState = {
    businesses: [
    ],
    bookmarks: [],
    error: null,
    fetchingBookmarks: false,
    fetchingReviews: false,
    isAuth: false,
    loggingIn: false,
    searchingLocation: false,
    signingUp: false,
    updatingBookmarks: false,
    username: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case DELETE_BOOKMARK_FAILURE:
            return {
                ...state, error: action.payload, updatingBookmarks: false,
            }
        case DELETE_BOOKMARK_REQUEST:
            return {
                ...state, error: null, updatingBookmarks: true,
            }
        case DELETE_BOOKMARK_SUCCESS: {
            return {
                ...state, bookmarks: action.payload, updatingBookmarks: false,
            }
        }
        case GET_BOOKMARK_FAILURE:
            return {
                ...state, error: action.payload, fetchingBookmarks: false,
            }
        case GET_BOOKMARK_REQUEST:
            return {
                ...state, error: null, fetchingBookmarks: true,
            }
        case GET_BOOKMARK_SUCCESS:
            return {
                ...state, fetchingBookmarks: false, bookmarks: action.payload,
            }
        case GET_LOCATION_FAILURE:
            return {
                ...state, error: action.payload, searchingLocation: false
            }
        case GET_LOCATION_REQUEST:
            return {
                ...state, error: null, searchingLocation: true
            }
        case GET_LOCATION_SUCCESS:
            return {
                ...state, businesses: action.payload, searchingLocation: false
            }

        case GET_REVIEWS_FAILURE:
            return {
                ...state, error: action.payload, fetchingReviews: false
            }
        case GET_REVIEWS_REQUEST:
            return {
                ...state, error: null, fetchingReviews: true
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state, fetchingReviews: false
            }

        case POST_BOOKMARK_FAILURE:
            return {
                ...state, error: action.payload, updatingBookmarks: false,
            }
        case POST_BOOKMARK_REQUEST:
            return {
                ...state, error: null, updatingBookmarks: true,
            }
        case POST_BOOKMARK_SUCCESS:
            return {
                ...state, updatingBookmarks: false, bookmarks: action.payload,
            }
        case POST_LOGIN_FAILURE:
            return {
                ...state, error: action.payload, loggingIn: false
            }
        case POST_LOGIN_REQUEST:
            return {
                ...state, error: null, loggingIn: true
            }
        case POST_LOGIN_SUCCESS:
            return {
                ...state, isAuth: true, loggingIn: false, username: action.payload
            }
        case POST_SIGNUP_FAILURE:
            return {
                ...state, error: action.payload, signingUp: false
            }
        case POST_SIGNUP_REQUEST:
            return {
                ...state, error: null, signingUp: true
            }
        case POST_SIGNUP_SUCCESS:
            return {
                ...state, isAuth: true, signingUp: false, username: action.payload
            }
        case UPDATE_BOOKMARKS_FAILURE:
            return {
                ...state, error: action.payload, updatingBookmarks: false
            }
        case UPDATE_BOOKMARKS_REQUEST:
            return {
                ...state, error: null, updatingBookmarks: true
            }
        case UPDATE_BOOKMARKS_SUCCESS:
            return {
                ...state, updatingBookmarks: false, bookmarks: action.payload,
            }
        default:
            return state
    }
}