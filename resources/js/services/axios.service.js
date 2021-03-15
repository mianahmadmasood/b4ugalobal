import Axios from "axios";
import { SERVER_URL } from "../constants/commonValues";
export const callAPI = async (request) => {
    const { url: URL, method, data, headers } = request;
    const url = SERVER_URL + URL;
    console.log("in axios api", url, method, data);
    const res = await Axios({
        method,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        url,
        data,
    })
        .then((res) => {
            console.log('Response from axios.service', res)
            return res;
        })
        .catch((error) => {
            console.log("err from axios.service", error.response);
            return error.response;
        });
    return res;
};
