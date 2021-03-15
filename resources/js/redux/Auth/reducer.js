import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER,
} from "../../constants/actionTypes";

const INIT_STATE = {
    user: null,
    error: false,
    loading: false,
    loadingLogout: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                user: action.payload.msg,
            };
        case LOGOUT_USER:

            localStorage.clear()

            return { ...state, user: null };
        default:
            return { ...state };
    }
};
