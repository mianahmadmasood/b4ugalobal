import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { LOGIN_USER } from "../../constants/actionTypes";
import { SUCCESS_STATUS } from "../../constants/statusCodes";

import { loginApi } from "../../Api/auth.api";

import { loginUserRequestSuccess, loginUserRequestFail } from "../actions";
import Notification from '../../components/Notification/notification';

//login

const loginRequest = async (payload) => {
    const res = await loginApi({ ...payload });
    return res;
};
function* login(action) {
    const { history, email, password } = action.payload;
    const response = yield call(() => loginRequest({ email, password }));

    if (response.status_code === SUCCESS_STATUS) {
        yield put(loginUserRequestSuccess(response));
        localStorage.setItem("access_token", response.access_token);
        history.push("/dashboard");
    } else {
        yield put(loginUserRequestFail(response));
        Notification('error', response.status_code, response.message)
        console.log("error login", response);

    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_USER, login);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
    ]);
}
