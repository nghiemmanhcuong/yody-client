import axiosClient from "./axiosClient";

const categoryApi = {
    getNavCategories: () => {
        const url = 'category/in-navigation';
        return axiosClient.get(url);
    },

    getCategories: (subject) => {
        const url = 'category/by-subject/' + subject;
        return axiosClient.get(url);
    },

    getPopular: (subject) => {
        const url = 'category/popular/' + subject;
        return axiosClient.get(url);
    },

    getParentPopular: (subject) => {
        const url = 'category/parent-popular/' + subject;
        return axiosClient.get(url);
    },

    getBySlug: (slug) => {
        const url = 'category/by-slug/' + slug;
        return axiosClient.get(url);
    }
}

export default categoryApi;