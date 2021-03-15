import Notification from '../components/Notification/notification'
import { SUCCESS_STATUS } from '../constants/statusCodes'

function sagaMiddlewareForSuccessOrFailure(response, successFunction, errorFunction) {
    if (response && response.status_code === SUCCESS_STATUS) {
        console.log('response in success saga middleware', response)
        Notification("success", response.status_code || 200, response.message || "Successful")
        return successFunction(response)


    } else {

        console.log('response in error saga middleware', response)
        Notification("error", response.status_code || 500, response.message || "Some error occurred")

        return errorFunction(response)
    }
}
export default sagaMiddlewareForSuccessOrFailure