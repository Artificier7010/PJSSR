import axios from 'axios';
import { UPLOAD_API_NOTIFICATION_MESSAGES, UPLOAD_SERVICE_URLS } from '../Constants/uploadconfig';
import { getAccessToken } from '../Utils/Commonutils';

const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        Accept:"application/json",
        "Content-Type": "multipart/form-data",
    }

})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (res) {
        return processResponse(res);
    },
    function (error) {
        return processError(error);
    }
)

const processResponse = (res) => {
    console.log("process response got", res);

    if (res?.status === 200) {
        return { isSuccess: true, data: res.data }
    } else {
        return {
            isFailure: true,
            status: res?.status,
            msg: res?.msg,
            code: res?.code
        }
    }
}

const processError = (err) => {
    if (err.response) {
        console.log("Error in response", err.toJSON());
        return {
            isError: true,
            msg: UPLOAD_API_NOTIFICATION_MESSAGES.responseFailure,
            code: err.response.status
        }

    } else if (err.request) {
        console.log("Error in request", err.toJSON());
        return {
            isError: true,
            msg: UPLOAD_API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }

    } else {
        console.log("Error in network", err.toJSON());
        return {
            isError: true,
            msg: UPLOAD_API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }

    }

}

const UPLOAD_API = {};

for (const [key, value] of Object.entries(UPLOAD_SERVICE_URLS)) {
    UPLOAD_API[key] = (body, showUploadProgress, showDownloadProgress) => axiosInstance({
        method: value.method,
        url: value.url,
        data: body,
        responseType: value.responseType,
        headers:{
            Authorization:getAccessToken()
        },
        onUploadProgress: function (progressEvent) {
            if (showUploadProgress) {
                let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                showUploadProgress(percentageCompleted);
            }
        },
        onDownloadProgress: function (progressEvent) {
            if (showDownloadProgress) {
                let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                showDownloadProgress(percentageCompleted);
            }
        },
    })

}

export { UPLOAD_API };


