import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_GROUP_CRITERIA_LIST, ADD_GROUP_CRITERIA, DELETE_GROUP_CRITERIA, UPDATE_GROUP_CRITERIA, SHOW_GROUP_CRITERIA } from "../../constants/actionTypes";
import { getGroupCriteriaListApi, addGroupCriteriaApi, showGroupCriteriaApi, deleteGroupCriteriaApi, updateGroupCriteriaApi } from "../../Api/groupCriteria.api";

import {
  getGroupCriteriaListRequestSuccess,
  getGroupCriteriaListRequestError,
  addGroupCriteriaRequestSuccess,
  addGroupCriteriaRequestError,
  deleteGroupCriteriaRequestSuccess,
  deleteGroupCriteriaRequestError,
  updateGroupCriteriaRequestSuccess,
  updateGroupCriteriaRequestError,
  showGroupCriteriaRequestSuccess,
  showGroupCriteriaRequestError
} from "../actions";
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';

// Get GroupCriteria
const getGroupCriteriaListRequest = async (payload) => {
  const res = await getGroupCriteriaListApi({ ...payload });
  return res;
};
function* getGroupCriteriaList(action) {

  console.log("action from campaign list ", action.payload);
  const response = yield call(() => getGroupCriteriaListRequest(action.payload));
  // if (response && response.status_code === SUCCESS_STATUS) {
  //   yield put(getGroupCriteriaListRequestSuccess(response.data.data));

  // } else {
  //   yield put(getGroupCriteriaListRequestError(response));


  // }

  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getGroupCriteriaListRequestSuccess, getGroupCriteriaListRequestError)
  yield put(responseOfMiddleware);
}
export function* watchGetGroupCriteriaList() {
  yield takeLatest(GET_GROUP_CRITERIA_LIST, getGroupCriteriaList);
}


// Show group
const showGroupCriteriaRequest = async (payload) => {
  const res = await showGroupCriteriaApi(payload);
  return res;
};
function* showGroupCriteria(action) {

  console.log("action from show group criteria ", action.payload);
  const response = yield call(() => showGroupCriteriaRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showGroupCriteriaRequestSuccess, showGroupCriteriaRequestError)
  yield put(responseOfMiddleware);
}
export function* watchShowGroupCriteria() {
  yield takeLatest(SHOW_GROUP_CRITERIA, showGroupCriteria);
}


// Add GroupCriteria
const addGroupCriteriaRequest = async (payload) => {
  const res = await addGroupCriteriaApi({ ...payload });
  return res;
};


function* addGroupCriteria(action) {

  console.log("action from add document ", action.payload);
  const response = yield call(async () => await addGroupCriteriaRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addGroupCriteriaRequestSuccess, addGroupCriteriaRequestError)
  yield put(responseOfMiddleware);
}

export function* watchAddGroupCriteria() {
  yield takeLatest(ADD_GROUP_CRITERIA, addGroupCriteria);
}



// Delete GroupCriteria
const deleteGroupCriteriaRequest = async (payload) => {
  const res = await deleteGroupCriteriaApi(payload);
  return res;
};


function* deleteGroupCriteria(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await deleteGroupCriteriaRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deleteGroupCriteriaRequestSuccess, deleteGroupCriteriaRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeleteGroupCriteria() {
  yield takeLatest(DELETE_GROUP_CRITERIA, deleteGroupCriteria);
}

// Update GroupCriteria
const updateGroupCriteriaRequest = async (payload) => {
  const res = await updateGroupCriteriaApi({ ...payload });
  return res;
};


function* updateGroupCriteria(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await updateGroupCriteriaRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updateGroupCriteriaRequestSuccess, updateGroupCriteriaRequestError)
  yield put(responseOfMiddleware);
}

export function* watchUpdateGroupCriteria() {
  yield takeLatest(UPDATE_GROUP_CRITERIA, updateGroupCriteria);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetGroupCriteriaList),

    fork(watchShowGroupCriteria),

    fork(watchAddGroupCriteria),
    fork(watchDeleteGroupCriteria),
    fork(watchUpdateGroupCriteria),


  ]);
}
