import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import groupNameReducer from "./GroupName/reducer";
import campaignReducer from "./Campaign/reducer";
import messageTemplateReducer from "./MessageTemplate/reducer";
import emailTemplateReducer from "./EmailTemplate/reducer";
import groupCriteriaReducer from "./GroupCriteria/reducer";


import pushNotificationTemplateReducer from "./PushNotificationTemplate/reducer";

const test = () => {
        return {
                authUser,
                groupNameReducer,
                campaignReducer,
                messageTemplateReducer,
                emailTemplateReducer,
                groupCriteriaReducer,
                pushNotificationTemplateReducer
        };
};

const reducers = combineReducers(test());

export default reducers;
