import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_GROUP_NAME_LIST, ADD_GROUP_NAME, DELETE_GROUP_NAME, UPDATE_GROUP_NAME, SHOW_GROUP_NAME } from "../../constants/actionTypes";
import { getGroupNameListApi, addGroupNameApi, showGroupNameApi, deleteGroupNameApi, updateGroupNameApi } from "../../Api/groupName.api";

import {
  getGroupNameListRequestSuccess,
  getGroupNameListRequestError,
  addGroupNameRequestSuccess,
  addGroupNameRequestError,
  deleteGroupNameRequestSuccess,
  deleteGroupNameRequestError,
  updateGroupNameRequestSuccess,
  updateGroupNameRequestError,
  showGroupNameRequestSuccess,
  showGroupNameRequestError
} from "../actions";
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';

// Get GroupName
const getGroupNameListRequest = async (payload) => {
  const res = await getGroupNameListApi({ ...payload });
  return res;
};
function* getGroupNameList(action) {

  console.log("action from campaign list ", action.payload);
  const response = yield call(() => getGroupNameListRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getGroupNameListRequestSuccess, getGroupNameListRequestError)
  yield put(responseOfMiddleware);

}
export function* watchGetGroupNameList() {
  yield takeLatest(GET_GROUP_NAME_LIST, getGroupNameList);
}


// Show group
const showGroupNameRequest = async (payload) => {
  const res = await showGroupNameApi(payload);
  return res;
};
function* showGroupName(action) {

  console.log("action from show campaign ", action.payload);
  const response = yield call(() => showGroupNameRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showGroupNameRequestSuccess, showGroupNameRequestError)
  yield put(responseOfMiddleware);
}
export function* watchShowGroupName() {
  yield takeLatest(SHOW_GROUP_NAME, showGroupName);
}


// Add GroupName
const addGroupNameRequest = async (payload) => {
  const res = await addGroupNameApi({ ...payload });
  return res;
};


function* addGroupName(action) {

  console.log("action from add document ", action.payload);
  const response = yield call(async () => await addGroupNameRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addGroupNameRequestSuccess, addGroupNameRequestError)
  yield put(responseOfMiddleware);


}

export function* watchAddGroupName() {
  yield takeLatest(ADD_GROUP_NAME, addGroupName);
}



// Delete GroupName
const deleteGroupNameRequest = async (payload) => {
  const res = await deleteGroupNameApi(payload);
  return res;
};


function* deleteGroupName(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await deleteGroupNameRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deleteGroupNameRequestSuccess, deleteGroupNameRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeleteGroupName() {
  yield takeLatest(DELETE_GROUP_NAME, deleteGroupName);
}

// Update GroupName
const updateGroupNameRequest = async (payload) => {
  const res = await updateGroupNameApi({ ...payload });
  return res;
};


function* updateGroupName(action) {

  console.log("action from update group name ", action.payload);
  const response = yield call(async () => await updateGroupNameRequest(action.payload));

  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updateGroupNameRequestSuccess, updateGroupNameRequestError)

  yield put(responseOfMiddleware);


}

export function* watchUpdateGroupName() {
  yield takeLatest(UPDATE_GROUP_NAME, updateGroupName);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetGroupNameList),

    fork(watchShowGroupName),

    fork(watchAddGroupName),
    fork(watchDeleteGroupName),
    fork(watchUpdateGroupName),
  ]);
}
