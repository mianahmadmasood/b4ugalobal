import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_MESSAGE_TEMPLATE_LIST, ADD_MESSAGE_TEMPLATE, DELETE_MESSAGE_TEMPLATE, UPDATE_MESSAGE_TEMPLATE, SHOW_MESSAGE_TEMPLATE } from "../../constants/actionTypes";
import { getMessageTemplateListApi, showMessageTemplateApi, addMessageTemplateApi, deleteMessageTemplateApi, updateMessageTemplateApi } from "../../Api/messageTemplate.api";

import {
  getMessageTemplateListRequestSuccess,
  getMessageTemplateListRequestError,
  addMessageTemplateRequestSuccess,
  addMessageTemplateRequestError,
  deleteMessageTemplateRequestSuccess,
  deleteMessageTemplateRequestError,
  updateMessageTemplateRequestSuccess,
  updateMessageTemplateRequestError,
} from "../actions";
import { showMessageTemplateRequestError, showMessageTemplateRequestSuccess } from './actions';
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';

// Get MessageTemplate
const getMessageTemplateListRequest = async (payload) => {
  const res = await getMessageTemplateListApi({ ...payload });
  return res;
};
function* getMessageTemplateList(action) {

  console.log("action from message template list ", action.payload);
  const response = yield call(() => getMessageTemplateListRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getMessageTemplateListRequestSuccess, getMessageTemplateListRequestError)
  yield put(responseOfMiddleware);
}
export function* watchGetMessageTemplateList() {
  yield takeLatest(GET_MESSAGE_TEMPLATE_LIST, getMessageTemplateList);
}


// show MessageTemplate
const showMessageTemplateRequest = async (payload) => {
  const res = await showMessageTemplateApi(payload);
  return res;
};


function* showMessageTemplate(action) {

  console.log("action from show document ", action.payload);
  const response = yield call(async () => await showMessageTemplateRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showMessageTemplateRequestSuccess, showMessageTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchShowMessageTemplate() {
  yield takeLatest(SHOW_MESSAGE_TEMPLATE, showMessageTemplate);
}




// Add MessageTemplate
const addMessageTemplateRequest = async (payload) => {
  const res = await addMessageTemplateApi({ ...payload });
  return res;
};


function* addMessageTemplate(action) {

  console.log("action from add document ", action.payload);
  const response = yield call(async () => await addMessageTemplateRequest(action.payload));

  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addMessageTemplateRequestSuccess, addMessageTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchAddMessageTemplate() {
  yield takeLatest(ADD_MESSAGE_TEMPLATE, addMessageTemplate);
}





// Delete MessageTemplate
const deleteMessageTemplateRequest = async (payload) => {
  const res = await deleteMessageTemplateApi(payload);
  return res;
};


function* deleteMessageTemplate(action) {

  console.log("action from delete message template ", action.payload);
  const response = yield call(async () => await deleteMessageTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deleteMessageTemplateRequestSuccess, deleteMessageTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeleteMessageTemplate() {
  yield takeLatest(DELETE_MESSAGE_TEMPLATE, deleteMessageTemplate);
}

// Update MessageTemplate
const updateMessageTemplateRequest = async (payload) => {
  const res = await updateMessageTemplateApi({ ...payload });
  return res;
};


function* updateMessageTemplate(action) {

  console.log("action from delete document ", action.payload.data);
  const response = yield call(async () => await updateMessageTemplateRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updateMessageTemplateRequestSuccess, updateMessageTemplateRequestError)
  yield put(responseOfMiddleware);
}

export function* watchUpdateMessageTemplate() {
  yield takeLatest(UPDATE_MESSAGE_TEMPLATE, updateMessageTemplate);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetMessageTemplateList),
    fork(watchAddMessageTemplate),
    fork(watchDeleteMessageTemplate),
    fork(watchUpdateMessageTemplate),
    fork(watchShowMessageTemplate),


  ]);
}
