import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_PUSH_NOTIFICATION_TEMPLATE_LIST, ADD_PUSH_NOTIFICATION_TEMPLATE, DELETE_PUSH_NOTIFICATION_TEMPLATE, UPDATE_PUSH_NOTIFICATION_TEMPLATE, SHOW_PUSH_NOTIFICATION_TEMPLATE } from "../../constants/actionTypes";
import { getPushNotificationTemplateListApi, showPushNotificationTemplateApi, addPushNotificationTemplateApi, deletePushNotificationTemplateApi, updatePushNotificationTemplateApi } from "../../Api/pushNotificationTemplate.api";

import {
  getPushNotificationTemplateListRequestSuccess,
  getPushNotificationTemplateListRequestError,
  addPushNotificationTemplateRequestSuccess,
  addPushNotificationTemplateRequestError,
  deletePushNotificationTemplateRequestSuccess,
  deletePushNotificationTemplateRequestError,
  updatePushNotificationTemplateRequestSuccess,
  updatePushNotificationTemplateRequestError,
} from "../actions";
import { showPushNotificationTemplateRequestError, showPushNotificationTemplateRequestSuccess } from './actions';
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';

// Get PushNotificationTemplate
const getPushNotificationTemplateListRequest = async (payload) => {
  const res = await getPushNotificationTemplateListApi({ ...payload });
  return res;
};
function* getPushNotificationTemplateList(action) {

  console.log("action from push notification template list ", action.payload);
  const response = yield call(() => getPushNotificationTemplateListRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getPushNotificationTemplateListRequestSuccess, getPushNotificationTemplateListRequestError)
  yield put(responseOfMiddleware);
}
export function* watchGetPushNotificationTemplateList() {
  yield takeLatest(GET_PUSH_NOTIFICATION_TEMPLATE_LIST, getPushNotificationTemplateList);
}



// show PushNotificationTemplate
const showPushNotificationTemplateRequest = async (payload) => {
  const res = await showPushNotificationTemplateApi(payload);
  return res;
};


function* showPushNotificationTemplate(action) {

  console.log("action from show document ", action.payload);
  const response = yield call(async () => await showPushNotificationTemplateRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showPushNotificationTemplateRequestSuccess, showPushNotificationTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchShowPushNotificationTemplate() {
  yield takeLatest(SHOW_PUSH_NOTIFICATION_TEMPLATE, showPushNotificationTemplate);
}


// Add PushNotificationTemplate
const addPushNotificationTemplateRequest = async (payload) => {
  const res = await addPushNotificationTemplateApi(payload);
  return res;
};


function* addPushNotificationTemplate(action) {

  console.log("action from add push notification ", action.payload);
  const response = yield call(async () => await addPushNotificationTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addPushNotificationTemplateRequestSuccess, addPushNotificationTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchAddPushNotificationTemplate() {
  yield takeLatest(ADD_PUSH_NOTIFICATION_TEMPLATE, addPushNotificationTemplate);
}







// Delete PushNotificationTemplate
const deletePushNotificationTemplateRequest = async (payload) => {
  const res = await deletePushNotificationTemplateApi(payload);
  return res;
};


function* deletePushNotificationTemplate(action) {

  console.log("action from delete push notification template ", action.payload);
  const response = yield call(async () => await deletePushNotificationTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deletePushNotificationTemplateRequestSuccess, deletePushNotificationTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeletePushNotificationTemplate() {
  yield takeLatest(DELETE_PUSH_NOTIFICATION_TEMPLATE, deletePushNotificationTemplate);
}

// Update PushNotificationTemplate
const updatePushNotificationTemplateRequest = async (payload) => {
  const res = await updatePushNotificationTemplateApi(payload);
  return res;
};


function* updatePushNotificationTemplate(action) {

  console.log("action from delete document ", action.payload.data);
  const response = yield call(async () => await updatePushNotificationTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updatePushNotificationTemplateRequestSuccess, updatePushNotificationTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchUpdatePushNotificationTemplate() {
  yield takeLatest(UPDATE_PUSH_NOTIFICATION_TEMPLATE, updatePushNotificationTemplate);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetPushNotificationTemplateList),
    fork(watchAddPushNotificationTemplate),
    fork(watchDeletePushNotificationTemplate),
    fork(watchUpdatePushNotificationTemplate),
    fork(watchShowPushNotificationTemplate),


  ]);
}
