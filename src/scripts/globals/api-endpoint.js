import CONFIG from './config';

const API_ENDPOINT = {
  RestoHome: `${CONFIG.BASE_URL}list`,
  RestoDetail: (id) => `${CONFIG.BASE_URL}detail/${id}`,

};

export default API_ENDPOINT;
