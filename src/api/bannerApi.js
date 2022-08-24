import axiosClient from "./axiosClient";

const bannerApi = {
    getTopbarBanner: () => {
        const url = 'banner/topbar';
        return axiosClient.get(url);
    },

    getHeroSlider: () => {
        const url = 'banner/slide-hero';
        return axiosClient.get(url);
    },

    getBotSlider: () => {
        const url = 'banner/slide-bot';
        return axiosClient.get(url);
    },

    getHotBanner: () => {
        const url = 'banner/hot';
        return axiosClient.get(url);
    },

    getPopularBanner: () => {
        const url = 'banner/popular';
        return axiosClient.get(url);
    }
}

export default bannerApi;