import axiosClient from "./axiosClient";

const contactApi = {
    addContact: (data) => {
        let url = 'contact/add';
        return axiosClient.post(url, data);
    }
}

export default contactApi;