import { all, fork } from "redux-saga/effects";
import authSagas from "./auth/saga";
import groupNameSaga from "./GroupName/saga";
import groupCriteriaSaga from "./GroupCriteria/saga";

import campaignSaga from "./Campaign/saga";
import messageTemplateSaga from "./MessageTemplate/saga";
import emailTemplateSaga from "./EmailTemplate/saga";
import pushNotificationTemplateSaga from "./PushNotificationTemplate/saga";



export default function* rootSaga(getState) {
    yield all([fork(authSagas),
    fork(groupNameSaga),
    fork(campaignSaga),
    fork(messageTemplateSaga),
    fork(emailTemplateSaga),
    fork(groupCriteriaSaga),
    fork(pushNotificationTemplateSaga),


    ]);
}
