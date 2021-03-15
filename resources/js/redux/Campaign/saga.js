import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SUCCESS_STATUS } from "../../constants/statusCodes";
import { GET_CAMPAIGN_LIST, SHOW_CAMPAIGN, ADD_CAMPAIGN, DELETE_CAMPAIGN, UPDATE_CAMPAIGN } from "../../constants/actionTypes";
import { getCampaignListApi, showCampaignApi, addCampaignApi, deleteCampaignApi, updateCampaignApi } from "../../Api/campaign.api";

import {
  getCampaignListRequestSuccess,
  getCampaignListRequestError,
  addCampaignRequestSuccess,
  addCampaignRequestError,
  deleteCampaignRequestSuccess,
  deleteCampaignRequestError,
  updateCampaignRequestSuccess,
  updateCampaignRequestError,
  showCampaignRequestSuccess,
  showCampaignRequestError
} from "../actions";
import displaySagaMiddlewareForSuccessOrFailure from '../../services/displayReduxMiddlewareResponse.service';
import sagaMiddlewareForSuccessOrFailure from '../../services/reduxMiddlewareResponse.service';

// Get Campaign
const getCampaignListRequest = async (payload) => {
  const res = await getCampaignListApi({ ...payload });
  return res;
};
function* getCampaignList(action) {

  console.log("action from campaign list ", action.payload);
  const response = yield call(() => getCampaignListRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, getCampaignListRequestSuccess, getCampaignListRequestError)
  yield put(responseOfMiddleware);
}
export function* watchGetCampaignList() {
  yield takeLatest(GET_CAMPAIGN_LIST, getCampaignList);
}

// Show campaign
const showCampaignRequest = async (payload) => {
  const res = await showCampaignApi(payload);
  return res;
};
function* showCampaign(action) {

  console.log("action from show campaign ", action.payload);
  const response = yield call(() => showCampaignRequest(action.payload));
  const responseOfMiddleware = displaySagaMiddlewareForSuccessOrFailure(response, showCampaignRequestSuccess, showCampaignRequestError)
  yield put(responseOfMiddleware);
}
export function* watchShowCampaign() {
  yield takeLatest(SHOW_CAMPAIGN, showCampaign);
}




// Add Campaign
const addCampaignRequest = async (payload) => {
  const res = await addCampaignApi({ ...payload });
  return res;
};


function* addCampaign(action) {

  console.log("action from add campaign in saga ", action.payload);
  const response = yield call(async () => await addCampaignRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, addCampaignRequestSuccess, addCampaignRequestError)
  yield put(responseOfMiddleware);
}

export function* watchAddCampaign() {
  yield takeLatest(ADD_CAMPAIGN, addCampaign);
}



// Delete Campaign
const deleteCampaignRequest = async (payload) => {
  const res = await deleteCampaignApi(payload);
  return res;
};


function* deleteCampaign(action) {

  console.log("action from delete document ", action.payload);
  const response = yield call(async () => await deleteCampaignRequest(action.payload));


  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, deleteCampaignRequestSuccess, deleteCampaignRequestError)
  yield put(responseOfMiddleware);
}

export function* watchDeleteCampaign() {
  yield takeLatest(DELETE_CAMPAIGN, deleteCampaign);
}

// Update Campaign
const updateCampaignRequest = async (payload) => {
  const res = await updateCampaignApi({ ...payload });
  return res;
};


function* updateCampaign(action) {

  console.log("action from update campaign ", action.payload);
  const response = yield call(async () => await updateCampaignRequest(action.payload));
  const responseOfMiddleware = sagaMiddlewareForSuccessOrFailure(response, updateCampaignRequestSuccess, updateCampaignRequestError)
  yield put(responseOfMiddleware);
}

export function* watchUpdateCampaign() {
  yield takeLatest(UPDATE_CAMPAIGN, updateCampaign);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetCampaignList),
    fork(watchAddCampaign),
    fork(watchDeleteCampaign),
    fork(watchUpdateCampaign),
    fork(watchShowCampaign),

  ]);
}
