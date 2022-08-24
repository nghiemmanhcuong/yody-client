import axiosClient from "./axiosClient";

const productApi = {
    getHotProduct: () => {
        const url = 'product/popular';
        return axiosClient.get(url);
    },

    getByMaterial: (materialId,limit) => {
        const url = `product/by-material/${materialId}/${limit}`;
        return axiosClient.get(url);
    },

    getBySubject: (category) => {
        const url = `product/by-subject/${category}`;
        return axiosClient.get(url);
    },

    getByCategory: (category,limit,currPage,formData) => {
        const url = `product/by-category/${category}/${limit}/${currPage}`;
        return axiosClient.post(url,formData);
    },

    getByCollection: (collection,limit,currPage,formData) => {
        const url = `product/by-collection/${collection}/${limit}/${currPage}`;
        return axiosClient.post(url,formData);
    },

    getDetail: (slug) => {
        const url = 'product/detail/'+ slug;
        return axiosClient.get(url);
    },

    getProductEvaluate: (productId) => {
        const url = 'product-evaluate/all/'+ productId;
        return axiosClient.get(url);
    },

    getRelate: (category) => {
        const url = 'product/relate/'+ category;
        return axiosClient.get(url);
    }
}

export default productApi;