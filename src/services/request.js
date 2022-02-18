import AxiosInstance from './Intercepter';
import config from '../config';
//Get Request
export async function get(api) {
  console.log('api', api);
  return AxiosInstance.get(`${config.API_URL}${api}`)
    .then(res => {
      console.log('resposee,,', res);
      if (res.status == 200 && !res.data.status) {
        return {
          ...res.data,
          status: 'success',
        };
      }
      return res.data;
    })
    .catch(err => err);
}
