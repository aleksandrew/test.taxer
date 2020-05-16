import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApiResponse } from '../constants/types';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/?key=16536208-9fc62eea32cdbf6ba7c4bd885',
});

export const getData = () => {
    return instance({ method: 'get'}).then((response) => response.data.hits) as Promise<BaseApiResponse>;
};
