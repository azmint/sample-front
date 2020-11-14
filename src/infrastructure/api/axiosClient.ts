import axios, {AxiosInstance, AxiosResponse} from 'axios';
import camelCaseKeys from 'camelcase-keys';

let axiosClient: AxiosInstance;

export default axiosClient = axios.create({
    baseURL: `http://localhost:8080/`,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        const data = camelCaseKeys(response.data);
        return {...response.data, data};
    }
);
