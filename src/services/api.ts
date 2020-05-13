import axios from 'axios';
import { BaseApiResponse } from '../constants/types';

const instance = axios.create({
    baseURL:
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
});

export function getData() {
    return instance({ method: 'get' }).then((response) => console.log(response));
}
