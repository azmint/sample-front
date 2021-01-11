import axios, {AxiosInstance, AxiosResponse} from 'axios';
import camelCaseKeys from 'camelcase-keys';

const env = process.env
const url = env.API_URL ? env.API_URL : 'http://localhost:8080/';

let axiosClient: AxiosInstance;

export default axiosClient = axios.create({
    baseURL: url,
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
