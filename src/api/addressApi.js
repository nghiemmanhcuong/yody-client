import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://provinces.open-api.vn/api',
});

export const getProvinces = async () => await axiosClient.get('/p/?depth==3');
export const getDistricts = async () => await axiosClient.get('/d/?depth==3');
export const getWards = async () => await axiosClient.get('/w/?depth==3');
