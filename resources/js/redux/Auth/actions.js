import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
} from "../../constants/actionTypes";

export const loginUserRequest = (payload) => ({
    type: LOGIN_USER,
    payload,
});
export const loginUserRequestSuccess = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload,
});

export const loginUserRequestFail = (payload) => ({
    type: LOGIN_USER_FAIL,
    payload,
});

export const logoutUserRequest = (payload) => ({
    type: LOGOUT_USER,
    payload,
});
