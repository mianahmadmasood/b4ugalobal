import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_EMAIL_TEMPLATE_LIST, ADD_EMAIL_TEMPLATE, DELETE_EMAIL_TEMPLATE, UPDATE_EMAIL_TEMPLATE, SHOW_EMAIL_TEMPLATE } from "../../constants/actionTypes";
import { getEmailTemplateListApi, addEmailTemplateApi, deleteEmailTemplateApi, updateEmailTemplateApi, showEmailTemplateApi } from "../../Api/emailTemplate.api";

import {
  getEmailTemplateListRequestSuccess,
  getEmailTemplateListRequestError,
  addEmailTemplateRequestSuccess,
  addEmailTemplateRequestError,
  deleteEmailTemplateRequestSuccess,
  deleteEmailTemplateRequestError,
  updateEmailTemplateRequestSuccess,
  updateEmailTemplateRequestError,
  showEmailTemplateRequestError,
  showEmailTemplateRequestSuccess
} from "../actions";
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';

// Get EmailTemplate
const getEmailTemplateListRequest = async (payload) => {
  const res = await getEmailTemplateListApi({ ...payload });
  return res;
};
function* getEmailTemplateList(action) {

  console.log("action from campaign list ", action.payload);
  const response = yield call(() => getEmailTemplateListRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getEmailTemplateListRequestSuccess, getEmailTemplateListRequestError)
  yield put(responseOfMiddleware);
}
export function* watchGetEmailTemplateList() {
  yield takeLatest(GET_EMAIL_TEMPLATE_LIST, getEmailTemplateList);
}


// Show campaign
const showEmailTemplateRequest = async (payload) => {
  const res = await showEmailTemplateApi(payload);
  return res;
};
function* showEmailTemplate(action) {

  console.log("action from show campaign ", action.payload);
  const response = yield call(() => showEmailTemplateRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showEmailTemplateRequestSuccess, showEmailTemplateRequestError)
  yield put(responseOfMiddleware);
}
export function* watchShowEmailTemplate() {
  yield takeLatest(SHOW_EMAIL_TEMPLATE, showEmailTemplate);
}



// Add EmailTemplate
const addEmailTemplateRequest = async (payload) => {
  const res = await addEmailTemplateApi({ ...payload });
  return res;
};


function* addEmailTemplate(action) {

  console.log("action from add document ", action.payload);
  const response = yield call(async () => await addEmailTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addEmailTemplateRequestSuccess, addEmailTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchAddEmailTemplate() {
  yield takeLatest(ADD_EMAIL_TEMPLATE, addEmailTemplate);
}


// Delete EmailTemplate
const deleteEmailTemplateRequest = async (payload) => {
  const res = await deleteEmailTemplateApi(payload);
  return res;
};


function* deleteEmailTemplate(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await deleteEmailTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deleteEmailTemplateRequestSuccess, deleteEmailTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeleteEmailTemplate() {
  yield takeLatest(DELETE_EMAIL_TEMPLATE, deleteEmailTemplate);
}

// Update EmailTemplate
const updateEmailTemplateRequest = async (payload) => {
  const res = await updateEmailTemplateApi({ ...payload });
  return res;
};


function* updateEmailTemplate(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await updateEmailTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updateEmailTemplateRequestSuccess, updateEmailTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchUpdateEmailTemplate() {
  yield takeLatest(UPDATE_EMAIL_TEMPLATE, updateEmailTemplate);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetEmailTemplateList),
    fork(watchAddEmailTemplate),
    fork(watchDeleteEmailTemplate),
    fork(watchUpdateEmailTemplate),
    fork(watchShowEmailTemplate),

  ]);
}
