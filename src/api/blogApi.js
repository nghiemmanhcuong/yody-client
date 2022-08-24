import axiosClient from "./axiosClient";

const blogApi = {
    getPopularBlogs: (limit) => {
        const url = 'blog/popular/' + limit;
        return axiosClient.get(url);
    },

    getBlogCategories: () => {
        const url = 'blog-category/all';
        return axiosClient.get(url);
    },

    getByCategory: (category,limit) => {
        const url = 'blog/by-category/' + category + '/' + limit;
        return axiosClient.get(url);
    },

    getByCategoryPopular: (category) => {
        const url = 'blog/by-category-popular/' + category;
        return axiosClient.get(url);
    },

    getDetail: (slug) => {
        const url = 'blog/detail/' + slug;
        return axiosClient.get(url);
    }
}

export default blogApi;