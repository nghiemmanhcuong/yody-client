import axiosClient from "./axiosClient";

const shopApi = {
    getShop: (data) => {
        let url = 'shop/';
        return axiosClient.post(url, data);
    }
}

export default shopApi;