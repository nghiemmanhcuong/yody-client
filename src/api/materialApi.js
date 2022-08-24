import axiosClient from "./axiosClient";

const materialApi = {
    getPopularMaterials: () => {
        const url = 'material/popular';
        return axiosClient.get(url);
    },

    getAll: () => {
        const url = 'material/all';
        return axiosClient.get(url);
    }
}

export default materialApi;