
import axios from "axios";
import store from "./store";


axios.defaults.headers.common['Authorization'];

const axiosClient = axios.create({
  baseURL: `http://online-survey-laravel-vue-tailwindcss.000webhostapp.com/api`
  
});

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  config.headers['client-max-body-size'] = '50M';
  config.headers['keep-alive'] = '3600';
  config.headers['proxy-buffer-size'] = '500m';
  config.headers['proxy-buffers-number'] = '8';
  //axios.defaults.headers.common['keep-alive'] = '3600';
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['origin'] = 'true';
  config.headers['credentials'] = 'true';
  config.header['Access-Control-Allow-Methods'] =  'GET, POST, OPTIONS, PUT, PATCH, DELETE';
  config.header["Access-Control-Allow-Headers"] = "x-access-token, Origin, X-Requested-With, Content-Type, Accept";
  return config;
});


export default axiosClient;