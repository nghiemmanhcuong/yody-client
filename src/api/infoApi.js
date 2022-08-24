import axiosClient from "./axiosClient";

const infoApi = {
    getYodyInfos: () => {
        const url = 'info/';
        return axiosClient.get(url);
    }
}

export default infoApi;