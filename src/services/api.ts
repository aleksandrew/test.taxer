import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApiResponse } from '../constants/types';
// import { Promise } from 'q';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api',
});

export const getData = () => {
    return instance
        .get<BaseApiResponse>('/?key=16536208-9fc62eea32cdbf6ba7c4bd885')
        .then((response) => response.data.hits);
};
