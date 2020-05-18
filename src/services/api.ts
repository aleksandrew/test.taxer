import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApiResponse } from '../constants/types';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/?key=16536208-9fc62eea32cdbf6ba7c4bd885&per_page=9&page=1',
});

export const getData = (page: number = 1) => {
    console.log(page)
    return instance({ method: 'get', url: `&page=${page}`}).then((response) => response.data.hits) as Promise<BaseApiResponse>;
};
