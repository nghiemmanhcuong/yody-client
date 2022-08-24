import axiosClient from "./axiosClient";

const collectionApi = {
    getAll: () => {
        const url = 'collection/all';
        return axiosClient.get(url);
    },

    getBySlug: (slug) => {
        const url = 'collection/by-slug/' + slug;
        return axiosClient.get(url);
    }
}

export default collectionApi;