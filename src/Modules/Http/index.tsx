import axios from "axios";

axios.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response: any) => {
        if (response.data.status === "error") {
            return Promise.reject({
                response: response,
                message: response.data.message
            });
        }
        return response;
    },
    (error: any) => {
        return Promise.reject({
            response: error.response,
            message: error.response.data.message
        });
    }
);

export default axios;
