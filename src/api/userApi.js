import axiosClient from "./axiosClient";

const userApi = {
    likeProduct: (data) => {
        let url = 'user/like-product';
        return axiosClient.put(url, data);
    },
    unlikeProduct: (data) => {
        let url = 'user/unlike-product';
        return axiosClient.put(url, data);
    },
    addAddress: (data) => {
        let url = 'user/add-address';
        return axiosClient.post(url, data);
    },
    deleteAddress: (userEmail, addressId) => {
        let url = `user/delete-address/${userEmail}/${addressId}`;
        return axiosClient.delete(url);
    },
}

export default userApi;