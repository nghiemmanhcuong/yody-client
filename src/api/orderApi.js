import axiosClient from "./axiosClient";

const orderApi = {
    addOrder: (data) => {
        const url = 'order/add';
        return axiosClient.post(url,data);
    },
}

export default orderApi;